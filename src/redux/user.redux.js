import axios from 'axios'


const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const initState = {
    isAuth:'',
    msg:'',
    user:'',
    pwd:'',
};

//reducer
export function user(state=initState,action) {
    switch (action.type){
        case REGISTER_SUCCESS:
            return {...state,msg:'',isAuth:true,...action.payload};
        case ERROR_MSG :
            return {...state,isAuth:false,msg:action.msg};
        default:
            return state
    }

}

function registerSuccess(data) {
    return {type:REGISTER_SUCCESS,payload:data}
}

function errorMsg(msg) {
    return{msg,type:ERROR_MSG}
}

export function register({user,user_code,pwd,repeat_pwd}) {
    if (!user){
        return errorMsg('请输入账号')
    }else if (!user_code){
        return errorMsg('请输入验证码')
    }else if (!pwd){
        return errorMsg('请输入密码')
    }else if (!repeat_pwd){
        return errorMsg('请输入确认密码')
    }
    if (pwd!==repeat_pwd){
        return errorMsg('密码和确认密码不同')
    }
    return dispatch=>{
        axios.post('/user/register',{user,user_code,pwd,repeat_pwd}).then(
            res=>{
                if (res.state==200&&res.data.code==0){
                    dispatch(registerSuccess({user,user_code,pwd,repeat_pwd}));
                }else {
                    dispatch(errorMsg(res.data.msg))
                }
            }
        )
    }
}