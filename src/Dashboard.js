import React from 'react'
import { connect } from 'react-redux'
import { 
    BrowserRouter , 
    Route , 
    Link,
    Redirect,
    Switch
 } from 'react-router-dom'
 
 import App from './app'
import { logout } from './Auth.redux';
function Erying(){
    return <h2>二营</h2>
}
function Qibinglian(){
    return <h2>骑兵连</h2>
}
@connect(state=>state.auth,{
    logout
})
class Dashboard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
       const match = this.props.match;
        const redirectToLogin = <Redirect to='/login'></Redirect>    
        const app = (
            <div>
                 {this.props.isAuth?<button onClick={this.props.logout} style={{background:'red'}}>注销</button>:null }
                <ul>
                    <li> 
                        <Link to={`${match.url}/`}>一营</Link>     
                    </li> 
                    <li> 
                        <Link to={`${match.url}/erying`}>二营</Link>     
                    </li>  
                    <li> 
                        <Link to={`${match.url}/qibinglian`}>骑兵连</Link>     
                    </li>
                </ul>
                <Route path={`${match.url}/`} exact component={App}> </Route>
                <Route path={`${match.url}/erying`} component={Erying}> </Route>
                <Route path={`${match.url}/qibinglian`} component={Qibinglian}> </Route>
            </div>
        )
        // 看用户是否登录，根据登录情况返回结果
        return this.props.isAuth?app:redirectToLogin;
    }

}
export default Dashboard;