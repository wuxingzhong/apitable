package com.vikadata.api.control.service;

import java.util.List;
import java.util.Map;

import com.baomidou.mybatisplus.extension.service.IService;

import com.vikadata.api.workspace.dto.ControlRoleInfo;
import com.vikadata.api.workspace.dto.ControlRoleUnitDTO;
import com.vikadata.entity.ControlRoleEntity;

/**
 * <p>
 * Permission control unit role service interface
 * </p>
 */
public interface IControlRoleService extends IService<ControlRoleEntity> {

    /**
     * Get all role information of the specified control unit
     *
     * @param controlId Control unit ID
     * @return entities
     */
    List<ControlRoleEntity> getByControlId(String controlId);

    /**
     * Get all role information of the specified control unit and organization unit
     *
     * @param controlId     Control Unit ID
     * @param unitId        Org Unit ID
     * @return entities
     */
    List<ControlRoleEntity> getByControlIdAndUnitId(String controlId, Long unitId);

    /**
     * Obtain the Org Unit ID of the specified control unit and the specified Role Code
     *
     * @param controlId Control Unit ID
     * @param roleCode  Role Code
     * @return unitId
     */
    Long getUnitIdByControlIdAndRoleCode(String controlId, String roleCode);

    /**
     * Get the Role Code of the specified control unit and organization unit
     *
     * @param controlId Control Unit ID
     * @param unitId    Org Unit ID
     * @return RoleCode
     */
    String getRoleCodeByControlIdAndUnitId(String controlId, Long unitId);

    /**
     * Get the Role Code of the specified control unit and the specified organizational unit set
     *
     * @param controlId Control Unit ID
     * @param unitIds   Org Unit ID Collection
     * @return ControlRoleInfo
     */
    List<ControlRoleInfo> getUnitRoleByControlIdAndUnitIds(String controlId, List<Long> unitIds);

    /**
     * Get the role information of the specified control unit
     *
     * @param controlId Control Unit ID
     * @return ControlRoleInfo
     */
    List<ControlRoleInfo> getUnitRoleByControlId(String controlId);

    /**
     * Get the role and organization unit information of the specified control unit
     *
     * @param controlId Control Unit ID
     * @return ControlRoleUnitDTO
     */
    List<ControlRoleUnitDTO> getControlRolesUnitDtoByControlId(String controlId);

    /**
     * New control unit role
     *
     * @param userId    User ID
     * @param controlId Control Unit ID
     * @param unitIds   Org Unit ID List
     * @param role      Added Roles
     */
    void addControlRole(Long userId, String controlId, List<Long> unitIds, String role);

    /**
     * New control unit role
     *
     * @param userId        User ID
     * @param controlId     Control Unit ID
     * @param unitRoleMap   Organizational Unit Role Set
     */
    void addControlRole(Long userId, String controlId, Map<Long, String> unitRoleMap);

    /**
     * Modify control unit role
     *
     * @param userId    User ID
     * @param controlRoleIds       Table ID List
     * @param role      Modified role
     */
    void editControlRole(Long userId, List<Long> controlRoleIds, String role);

    /**
     * Modify control unit role
     *
     * @param userId    User ID
     * @param controlId Control Unit ID
     * @param unitIds   Org Unit ID List
     * @param role      Modified role
     */
    void editControlRole(Long userId, String controlId, List<Long> unitIds, String role);

    /**
     * Delete all roles of the specified control unit
     *
     * @param controlIds Control Unit ID Collection
     */
    void removeByControlIds(Long userId, List<String> controlIds);

    /**
     * Delete all roles of the organizational unit
     *
     * @param unitIds Org Unit ID Collection
     */
    void removeByUnitIds(List<Long> unitIds);

    /**
     * Delete the role of the specified control unit and organization unit
     *
     * @param controlId Control Unit ID
     * @param unitId    Org Unit ID
     */
    void removeByControlIdAndUnitId(String controlId, Long unitId);

    /**
     * Delete the role of the specified control unit and organization unit
     *
     * @param controlId Control Unit ID
     * @param unitIds   Org Unit ID Collection
     */
    void removeByControlIdAndUnitIds(String controlId, List<Long> unitIds);

    /**
     * Obtain Org Unit ID according to permission
     *
     * @param controlId Control Unit ID
     * @param unitId    Org Unit ID
     * @param roleCode Role Code
     * @param ignoreDeleted Ignore delete flag
     * @return Org Unit ID
     */
    ControlRoleEntity getByControlIdAndUnitIdAndRoleCode(String controlId, Long unitId, String roleCode,
            boolean ignoreDeleted);

    /**
     * Update whether the permission is deleted
     *
     * @param ids Primary key ID
     * @param userId Modify User ID
     * @param isDeleted Deleted state
     */
    void editIsDeletedByIds(List<Long> ids, Long userId, boolean isDeleted);

    /**
     * Get the non owner role information of the specified control unit and organization unit
     *
     * @param controlId     Control Unit ID
     * @param unitIds        Org Unit ID
     * @return Unit Role
     */
    Map<Long, String> getUnitIdToRoleCodeMapWithoutOwnerRole(String controlId, List<Long> unitIds);
}
