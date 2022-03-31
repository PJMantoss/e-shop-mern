import { loginStart } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user){
    dispatch(loginStart());
    try{
        const response = await publicRequest.post("/auth/login", user);
        dispatch();
    }catch(err){
        console.log(err);
    };
};