import { Base_url } from "./Base_url";
import { CommonRequest } from "./Commonrequest";

export const AdminRegister=async(body,header)=>{
    return await CommonRequest("POST",`${Base_url}/admin-register`,body)
}
export const AdminsLogin=async(body)=>{
    return await CommonRequest("POST",`${Base_url}/login`,body)
}
export const Studentregister=async(body)=>{
        return await CommonRequest("POST",`${Base_url}/student_register`,body)
}
export const studentlogin=async(body)=>{
    return await CommonRequest("POST",`${Base_url}/student_login`,body)
}