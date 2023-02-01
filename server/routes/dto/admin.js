const AdminUserRouterDTO = {};

AdminUserRouterDTO.getUserDetails = (request) => {
    console.info(`Inside AdminUserRouterDTO.getUserDetails where request = ${JSON.stringify(request)}`);
    return request.branchId
}

AdminUserRouterDTO.getUserDetailsByNumber = (request) => {
    console.info(`Inside AdminUserRouterDTO.getUserDetailsByNumber where request = ${JSON.stringify(request)}`);
    return request.phoneNumber
}

export default AdminUserRouterDTO;