import Joi from 'joi';

const AdminUserSchema = {}

AdminUserSchema.getUserDetails = Joi.object().keys({
    branchId: Joi.string().required()
});

AdminUserSchema.getUserDetailsByNumber = Joi.object().keys({
    phoneNumber: Joi.string().required()
});


export default AdminUserSchema;