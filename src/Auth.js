import React from 'react'
import { connect } from 'react-redux'
import { login } from './Auth.redux'
import { Redirect } from 'react-router-dom';

//复杂redux运用，多个reduce,用combineReducers合并
@connect(state=>state.auth,{
    login
})
class Auth extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                {this.props.isAuth? <Redirect to='/dashboard'></Redirect>:null  }
                <h2>你没有登录，请登录</h2>
                <button onClick={ this.props.login}> 登录</button>

            </div>


        );
    }

}
export default Auth;