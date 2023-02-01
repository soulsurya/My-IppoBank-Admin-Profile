let constants = {
    DEFINED_ERRORS: {
        401: "Unauthorized to access the URL",
        701: "OOPS!! We are working on it",
        500: "Internal Server Error",
        200: "Success"
    },
    CUSTOM_MESSAGES: {
        100: "User account not found!",
        400: "Page doesn't exist",
        401: 'This user is not authorized',
    },
    MONGO_COLUMNS: {
        PHONE_NUMBER: "phoneNumber",
        CREATED_AT: "createdAt",
        UPDATED_AT: "updatedAt",
        ADDRESS: "address",
        PINCODE: "pincode",
        STATE: "state",
        BRANCH_ID: 'branchId',
        BRANCH_NAME: 'branchName',
        IFSC: 'ifsc'
    },
    MONGO_COLLECTION: {
        ADMIN_USERS: "AdminUsers"
    },
    /**
     * Came up with this simple definition all 
     * we need to do is define all of them here 
     * Mongo crud will take care of the rest
     */
    MONGO_INDEXES: {
        AdminUsers: {
            INDEXES: [
                {
                    "branchId": 1
                },
                {
                    "phoneNumber": 1
                }
            ]
        },
    }
}

export default constants;