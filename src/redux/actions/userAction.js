import { USER_AUTH, USER_ROLE } from "../constants/constants"

export const userAction = (payload)=>{
    return {
        type: USER_AUTH,
        payload 
    }
}

