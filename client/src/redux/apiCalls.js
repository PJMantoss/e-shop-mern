import { loginStart, loginSuccess, loginFailure  } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try{
        const response = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(response.data));
    }catch(err){
        dispatch(loginFailure());
    };
};