import Router from 'express-promise-router';
import constants from '../constants.js';
import Utils from '../utils.js'
import AdminUserRouterDTO from './dto/admin.js';
import AdminUserSchema from '../joiSchemas/admin.js';
import AdminUserHandler from '../handler/admin.js';

const router = Router();

router.get("/getUserById", async function (req, res) {
    try {
        let { error } = AdminUserSchema.getUserDetails.validate(req.query);
        if (error) {
            return res.status(400).json(Utils.formMessage(error.message, 400));
        }
        let branchId = AdminUserRouterDTO.getUserDetails(req.query);
        let result = await AdminUserHandler.getUserDetails(branchId);
        return res.jsonp(Utils.formMessage(result.success ? result.data : result.message, result.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in user/get with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})

router.get("/getUserByNumber", async function (req, res) {
    try {
        let { error } = AdminUserSchema.getUserDetailsByNumber.validate(req.query);
        if (error) {
            return res.status(400).json(Utils.formMessage(error.message, 400));
        }
        let phoneNumber = AdminUserRouterDTO.getUserDetailsByNumber(req.query);
        let result = await AdminUserHandler.getUserDetailsByNumber(phoneNumber);
        return res.jsonp(Utils.formMessage(result.success ? result.data : result.message, result.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in user/get with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})

export default router;