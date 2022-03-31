import { loginStart } from "./userRedux";

export const login = async (dispatch, user){
    dispatch(loginStart());
    try{}catch(err){
        console.log(err);
    };
};