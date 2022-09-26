import { stopPropagation, ThemeProvider } from '@vikadata/components';
import { FieldType, handleNullArray, IAttachmentValue, IReduxState, Selectors, Settings, StoreActions } from '@vikadata/core';
import { useKeyPress, useMount, useToggle, useUnmount } from 'ahooks';
import classNames from 'classnames';
import { ContextName, ShortcutContext } from 'pc/common/shortcut_key';
import { useResponsive } from 'pc/hooks';
import { store } from 'pc/store';
import { KeyCode } from 'pc/utils';
import { dispatch } from 'pc/worker/store';
import * as React from 'react';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Provider, shallowEqual, useDispatch, useSelector } from 'react-redux';
import { ScreenSize } from '../common/component_display';
import { OFFICE_APP_ID } from '../space_manage/marketing';
import { IExpandPreviewModalFuncProps } from './preview_file.interface';
import { PreviewMain } from './preview_main';
import { isFocusingInput } from './preview_main/util';
import styles from './style.module.less';

interface IPreviewFileModal {
  onClose: () => void;
}

const PreviewFileModal: React.FC<IPreviewFileModal> = props => {
  const { onClose } = props;
  const [isFullScreen, { toggle: toggleIsFullScreen }] = useToggle(false);
  const previewFile = useSelector(state => state.previewFile, shallowEqual);
  const { datasheetId, recordId, fieldId, activeIndex, editable, onChange, disabledDownload } = previewFile;
  let _cellValue = previewFile.cellValue;

  if (datasheetId && recordId && fieldId) {
    const state = store.getState();
    const snapshot = Selectors.getSnapshot(state, datasheetId);
    if (snapshot) {
      const fieldMap = snapshot.meta.fieldMap;
      const field = fieldMap[fieldId];
      if (field && Selectors.findRealField(state, field)?.type === FieldType.Attachment) {
        _cellValue = Selectors.getCellValue(state, snapshot, recordId, fieldId);
      } else {
        _cellValue = []; // 触发弹窗的关闭
      }
    }
  }

  const { userInfo, marketplaceApps, spaceId, shareInfo, rightPaneWidth, isSideRecordOpen, isRecordFullScreen, shareId, templateId } = useSelector(
    (state: IReduxState) => {
      return {
        spaceId: state.space.activeId,
        userInfo: state.user.info,
        shareInfo: state.share,
        marketplaceApps: state.space.marketplaceApps,
        rightPaneWidth: state.rightPane.width,
        isSideRecordOpen: state.space.isSideRecordOpen,
        isRecordFullScreen: state.space.isRecordFullScreen,
        shareId: state.pageParams.shareId,
        templateId: state.pageParams.templateId,
      };
    },
    shallowEqual,
  );
  const dispatch = useDispatch();
  const { screenIsAtMost } = useResponsive();
  const isMobile = screenIsAtMost(ScreenSize.md);

  const _spaceId = spaceId || shareInfo?.spaceId || Settings.template_space_id.value;

  const officePreviewEnable = marketplaceApps.find(app => app.appId === OFFICE_APP_ID)?.status ? true : false;

  const setActiveIndex = useCallback(
    (activeIndex: number) => {
      dispatch(
        StoreActions.setPreviewFile({
          ...previewFile,
          activeIndex,
        }),
      );
    },
    [dispatch, previewFile],
  );

  const cellValue = useMemo(() => {
    if (!_cellValue) return [];
    return handleNullArray(_cellValue.flat(1)) || [];
  }, [_cellValue]);

  const readonly = !editable;

  const onDelete = useCallback(() => {
    if (readonly) {
      return;
    }
    const filteredCellValue = cellValue.filter(item => item.id !== cellValue[activeIndex].id);
    onChange(filteredCellValue);
    const lastIndex = filteredCellValue.length - 1;
    if (activeIndex > lastIndex) {
      setActiveIndex(lastIndex);
    }
    if (cellValue.length === 1) {
      onClose();
      return;
    }
  }, [activeIndex, cellValue, onChange, onClose, readonly, setActiveIndex]);

  useEffect(() => {
    if (!cellValue || cellValue.length === 0) {
      return;
    }

    if (containerRef.current) {
      containerRef.current!.focus();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cellValue, activeIndex]);

  // activeIndex 防止超出范围
  useEffect(() => {
    if (cellValue.length === 0) {
      onClose();
    } else if (activeIndex >= cellValue.length) {
      setActiveIndex(cellValue.length - 1);
    }
  }, [activeIndex, cellValue.length, onClose, setActiveIndex]);

  const containerRef = useRef<HTMLDivElement>(null);

  useMount(() => {
    dispatch(StoreActions.setPreviewModalVisible(true));
  });

  useUnmount(() => dispatch(StoreActions.setPreviewModalVisible(false)));

  useKeyPress(KeyCode.Esc, onClose);
  useKeyPress(KeyCode.Space, () => {
    if (!isFocusingInput()) {
      onClose();
    }
  });

  useEffect(() => {
    ShortcutContext.bind(ContextName.modalVisible, () => true);
    return () => {
      ShortcutContext.unbind(ContextName.modalVisible);
    };
  });

  // 调整 width，处理侧边记录卡片出现时的情况
  const marginRight = (() => {
    const OFFSET_RIGHT = 3; // 拖拽线的偏移宽度
    const WRAP_RIGHT = 15; // 分享或模板页面的右侧偏移量

    let width = 0;
    // 如果有居中记录卡片，全屏显示
    if (isFullScreen || !isSideRecordOpen || isMobile || isRecordFullScreen || document.querySelector('.centerExpandRecord')) {
      return width;
    }
    if (typeof rightPaneWidth === 'number') {
      width = rightPaneWidth + OFFSET_RIGHT;
      if (shareId || templateId) width += WRAP_RIGHT;
      return width;
    }
    return rightPaneWidth;
  })();

  return (
    <div
      className={classNames(styles.previewWrapper, 'previewWrapperContainer')}
      style={{ marginRight }}
      ref={containerRef}
      draggable={false}
      tabIndex={0}
      onMouseDown={stopPropagation}
    >
      {cellValue[activeIndex] != null && (
        <PreviewMain
          files={cellValue}
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          onClose={onClose}
          onDelete={onDelete}
          readonly={readonly}
          userInfo={userInfo}
          spaceId={_spaceId}
          officePreviewEnable={officePreviewEnable}
          disabledDownload={disabledDownload}
          isFullScreen={isFullScreen}
          toggleIsFullScreen={toggleIsFullScreen}
        />
      )}
    </div>
  );
};

export interface IExpandPreviewModalRef {
  update: (props: IExpandPreviewModalFuncProps) => IExpandPreviewModalRef;
}

let preCloseModalFn = () => {};

export const expandPreviewModalClose = () => {
  preCloseModalFn();
  preCloseModalFn = () => {};
};

// TODO: 优化调用形式
export const expandPreviewModal = (props: IExpandPreviewModalFuncProps): IExpandPreviewModalRef => {
  preCloseModalFn();
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
    dispatch(StoreActions.setPreviewFileDefault());
  };
  preCloseModalFn = close;

  const render = (props: IExpandPreviewModalFuncProps) => {
    dispatch(
      StoreActions.setPreviewFile({
        ...props,
        onChange: (files: IAttachmentValue[]) => {
          props.onChange(files);
          if (files.length > 0) {
            update({
              ...props,
              cellValue: files,
            });
          }
        },
      }),
    );

    ReactDOM.render(
      <Provider store={store}>
        <ThemeProvider>
          <PreviewFileModal onClose={close} />
        </ThemeProvider>
      </Provider>,
      div,
    );
  };

  const update = (updatedProps: IExpandPreviewModalFuncProps) => {
    render(updatedProps);

    return {
      update,
    };
  };

  render(props);

  return {
    update,
  };
};
