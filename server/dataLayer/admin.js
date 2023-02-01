import constants from "../constants.js";
import MongoConnection from "../mongo_layer/mongoConnect.js";
import MongoCRUD from "../mongoLayer/mongoCrud.js";

const AdminUsersDAO = {};

/**
 * This function is used to get the branch profile for given phone number
 * @param {string} phoneNumber
 * @returns branch profile
 */

AdminUsersDAO.getUserProfileByPhoneNumber = async (phoneNumber) => {
    try {
        console.info(`In AdminUsersDAO.getUserProfileByPhoneNumber where phoneNumber = ${phoneNumber}`);
        let connectDb = await MongoConnection.getConnection(process.env.MONGO_DB);
        let query = { [constants.MONGO_COLUMNS.PHONE_NUMBER]: phoneNumber };
        let result = await MongoCRUD.get(connectDb, constants.MONGO_COLLECTION.ADMIN_USERS, query);
        return result || {};
    } catch (error) {
        console.error(`In AdminUsersDAO.getUserProfileByPhoneNumber ERROR : ${error.message} where phoneNumber = ${phoneNumber}`);
        throw error;
    }
}


/**
 * This function is used to get the user details and accounts by branchId
 * @param {string} branchId
 * @returns branch profile
 */

AdminUsersDAO.getUserDetailsByBranchId = async (branchId) => {
    try {
        console.info(`In AdminUsersDAO.getUserDetailsByBranchId where branchId = ${branchId}`);
        let connectDb = await MongoConnection.getConnection(process.env.MONGO_DB);
        let query = { [constants.MONGO_COLUMNS.BRANCH_ID]: branchId }
        let result = await MongoCRUD.get(connectDb, constants.MONGO_COLLECTION.ADMIN_USERS, query);
        return result || {};
    } catch (error) {
        console.error(`In AdminUsersDAO.getUserDetailsByBranchId ERROR : ${error.message} where branchId = ${branchId}`);
        throw error;
    }
}


export default AdminUsersDAO;