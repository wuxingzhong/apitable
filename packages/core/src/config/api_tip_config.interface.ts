export interface APITipConfigInterface {
    api: API;
}

export interface API {
    tips: Tips;
}

export interface Tips {
    api_request_success: APIAddRowFailedWrongLengthOfValueClass;
    api_datasheet_not_exist: APIAddRowFailedWrongLengthOfValueClass;
    api_upload_attachment_error: APIAddRowFailedWrongLengthOfValueClass;
    api_upload_attachment_exceed_limit: APIAddRowFailedWrongLengthOfValueClass;
    api_node_permission_error: APIAddRowFailedWrongLengthOfValueClass;
    api_unauthorized: APIAddRowFailedWrongLengthOfValueClass;
    api_forbidden: APIAddRowFailedWrongLengthOfValueClass;
    api_forbidden_because_of_usage: APIAddRowFailedWrongLengthOfValueClass;
    api_not_exists: APIAddRowFailedWrongLengthOfValueClass;
    api_frequently_error: APIAddRowFailedWrongLengthOfValueClass;
    api_server_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_can_not_operate: APIAddRowFailedWrongLengthOfValueClass;
    api_params_invalid_value: APIAddRowFailedWrongLengthOfValueClass;
    api_params_min_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_max_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_empty_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_max_count_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_instance_error: APIAddRowFailedWrongLengthOfValueClass;
    api_delete_error: APIAddRowFailedWrongLengthOfValueClass;
    api_insert_error: APIAddRowFailedWrongLengthOfValueClass;
    api_update_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_formula_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_default_error: APIAddRowFailedWrongLengthOfValueClass;
    api_space_capacity_over_limit: APIAddRowFailedWrongLengthOfValueClass;
    api_query_params_view_id_not_exists: APIAddRowFailedWrongLengthOfValueClass;
    api_params_not_exists: APIAddRowFailedWrongLengthOfValueClass;
    api_params_must_unique: APIAddRowFailedWrongLengthOfValueClass;
    api_forbidden_because_of_not_in_space: APIAddRowFailedWrongLengthOfValueClass;
    api_params_instance_space_id_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_invalid_space_id_value: APIAddRowFailedWrongLengthOfValueClass;
    api_param_sort_field_not_exists: APIAddRowFailedWrongLengthOfValueClass;
    api_params_record_ids_must_unique: APIAddRowFailedWrongLengthOfValueClass;
    api_datasheet_not_visible: APIAddRowFailedWrongLengthOfValueClass;
    api_upload_attachment_oversize: APIAddRowFailedWrongLengthOfValueClass;
    api_upload_attachment_exceed_capacity_limit: APIAddRowFailedWrongLengthOfValueClass;
    api_upload_attachment_not_editable: APIAddRowFailedWrongLengthOfValueClass;
    api_param_view_not_exists: APIAddRowFailedWrongLengthOfValueClass;
    api_param_record_not_exists: APIAddRowFailedWrongLengthOfValueClass;
    api_param_attachment_not_exists: APIAddRowFailedWrongLengthOfValueClass;
    api_param_unit_not_exists: APIAddRowFailedWrongLengthOfValueClass;
    api_param_unit_name_type_not_exists: APIAddRowFailedWrongLengthOfValueClass;
    api_params_automumber_can_not_operate: APIAddRowFailedWrongLengthOfValueClass;
    api_params_createdby_can_not_operate: APIAddRowFailedWrongLengthOfValueClass;
    api_params_created_time_can_not_operate: APIAddRowFailedWrongLengthOfValueClass;
    api_params_formula_can_not_operate: APIAddRowFailedWrongLengthOfValueClass;
    api_params_updatedby_can_not_operate: APIAddRowFailedWrongLengthOfValueClass;
    api_params_updated_time_can_not_operate: APIAddRowFailedWrongLengthOfValueClass;
    api_params_lookup_can_not_operate: APIAddRowFailedWrongLengthOfValueClass;
    api_params_invalid_fields_value: APIAddRowFailedWrongLengthOfValueClass;
    api_params_invalid_field_type: APIAddRowFailedWrongLengthOfValueClass;
    api_query_params_invalid_fields: APIAddRowFailedWrongLengthOfValueClass;
    api_params_invalid_field_key: APIAddRowFailedWrongLengthOfValueClass;
    api_params_invalid_order_sort: APIAddRowFailedWrongLengthOfValueClass;
    api_upload_invalid_file: APIAddRowFailedWrongLengthOfValueClass;
    api_upload_invalid_file_name: APIAddRowFailedWrongLengthOfValueClass;
    api_param_invalid_rating_field: APIAddRowFailedWrongLengthOfValueClass;
    api_params_max_length_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_link_field_record_ids_must_unique: APIAddRowFailedWrongLengthOfValueClass;
    api_params_multiselect_field_record_ids_must_unique: APIAddRowFailedWrongLengthOfValueClass;
    api_params_pagesize_min_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_maxrecords_min_error: APIParamsMaxrecordsMinError;
    api_params_pagenum_min_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_pagesize_max_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_rating_field_max_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_records_empty_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_recordids_empty_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_link_field_recordids_empty_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_records_max_count_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_link_field_records_max_count_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_member_field_records_max_count_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_invalid_primary_field_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_instance_fields_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_instance_recordid_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_instance_sort_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_instance_attachment_name_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_instance_attachment_token_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_instance_member_name_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_instance_member_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_delete_error_foreign_datasheet_deleted: APIAddRowFailedWrongLengthOfValueClass;
    api_add_row_failed_wrong_length_of_value: APIAddRowFailedWrongLengthOfValueClass;
    api_param_formula_function_content_empty: APIAddRowFailedWrongLengthOfValueClass;
    api_param_formula_function_err_no_left_bracket: APIAddRowFailedWrongLengthOfValueClass;
    api_param_formula_function_err_end_of_right_bracket: APIAddRowFailedWrongLengthOfValueClass;
    api_param_formula_function_err_unable_parse_char: APIAddRowFailedWrongLengthOfValueClass;
    api_param_formula_function_err_wrong_function_suffix: APIAddRowFailedWrongLengthOfValueClass;
    api_param_formula_function_err_no_ref_self_column: APIAddRowFailedWrongLengthOfValueClass;
    api_param_formula_function_err_not_definition: APIAddRowFailedWrongLengthOfValueClass;
    api_param_formula_function_err_unknown_operator: APIAddRowFailedWrongLengthOfValueClass;
    api_param_attachment_token_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_attachment_name_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_attachment_array_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_currency_field_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_number_field_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_percent_field_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_rating_field_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_email_field_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_phone_field_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_singletext_field_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_text_field_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_url_field_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_checkbox_field_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_datetime_field_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_link_field_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_member_field_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_member_id_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_tree_select_can_not_operate: APIAddRowFailedWrongLengthOfValueClass;
    api_param_multiselect_field_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_multiselect_field_value_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_select_field_value_type_error: APIAddRowFailedWrongLengthOfValueClass;
    api_param_invalid_record_id_value: APIAddRowFailedWrongLengthOfValueClass;
    api_params_link_field_recordids_not_exists: APIAddRowFailedWrongLengthOfValueClass;
    api_params_cellformat_error: APIAddRowFailedWrongLengthOfValueClass;
    api_params_primary_field_not_allowed_to_delete: APIAddRowFailedWrongLengthOfValueClass;
}

export interface APIAddRowFailedWrongLengthOfValueClass {
    code: number;
    id: string;
    isRecordTimes?: boolean;
    message?: string;
    statusCode: number;
    apiTypes?: APITypes;
}

export enum APITypes {
    FusionAPI = 'fusion_api',
}

export interface APIParamsMaxrecordsMinError {
    code: number;
    id: string;
    statusCode: number;
}
