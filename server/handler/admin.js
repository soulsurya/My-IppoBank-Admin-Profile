import constants from "../constants.js";
import lodash from 'lodash';
import AdminUserHandlerDTO from "./dto/admin.js";
import AdminUsersDAO from "../dataLayer/admin.js";

const AdminUserHandler = {}

/**
 * @description This Function will be used to get branch/admin user details by branch id
 * @param {*} branchId 
 * @returns admin user/ branch details
 */
AdminUserHandler.getUserDetails = async (branchId) => {
    try {
        console.info(`AdminUserHandler.getUserDetails where branchId = ${branchId}`);
        let handlerResponse = AdminUserHandlerDTO.getBaseResponse();
        handlerResponse.data = await AdminUsersDAO.getUserDetailsByBranchId(branchId);
        if (lodash.isEmpty(handlerResponse.data)) {
            handlerResponse.success = false;
            handlerResponse.message = constants.CUSTOM_MESSAGES[100]
        }
        return handlerResponse;
    } catch (error) {
        console.error(`In AdminUserHandler.getUserDetails where branchId = ${branchId} and error is ${error.message}`);
        throw error;
    }
};

/**
 * @description This Function will be used to get branch/admin user details by phoneNumber
 * @param {*} phoneNumber 
 * @returns admin user/ branch details
 */
AdminUserHandler.getUserDetailsByNumber = async (phoneNumber) => {
    try {
        console.info(`AdminUserHandler.getUserDetailsByNumber where phoneNumber = ${phoneNumber}`);
        let handlerResponse = AdminUserHandlerDTO.getBaseResponse();
        handlerResponse.data = await AdminUsersDAO.getUserProfileByPhoneNumber(phoneNumber);
        if (lodash.isEmpty(handlerResponse.data)) {
            handlerResponse.success = false;
            handlerResponse.message = constants.CUSTOM_MESSAGES[100]
        }
        return handlerResponse;
    } catch (error) {
        console.error(`In AdminUserHandler.getUserDetailsByNumber where phoneNumber = ${phoneNumber} and error is ${error.message}`);
        throw error;
    }
};

export default AdminUserHandler;