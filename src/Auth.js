import React from 'react'
import { connect } from 'react-redux'
import { login,getUserData } from './Auth.redux'
import { Redirect } from 'react-router-dom';
// import axios from 'axios';
//复杂redux运用，多个reduce,用combineReducers合并
@connect(state=>state.auth,{
    login,getUserData
})
class Auth extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    componentDidMount(){
        this.props.getUserData();
        console.log( this.state );
    }
    render(){
        return (

            <div>
                <h3> 我的名字是 { this.props.name },年龄是{ this.props.age }</h3>
                {this.props.isAuth? <Redirect to='/dashboard'></Redirect>:null  }
                <h2>你没有登录，请登录</h2>
                <button onClick={ this.props.login }> 登录</button>

            </div>


        );
    }

}
export default Auth;