import { loginStart } from "./userRedux";

export const login = async (dispatch, user){
    dispatch(loginStart());
    try{
        const response = await publicRequest.post();
    }catch(err){
        console.log(err);
    };
};