import React from 'react'
import ReactDOM from 'react-dom'
import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import { 
    BrowserRouter , 
    Route , 
    Link,
    Redirect,
    Switch
 } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './app'
import { counter,addGun,removeGun,addGunAsync } from './index.redux'


const reduxDextools = window.devToolsExtension?window.devToolsExtension():f=>f;
const store = createStore(counter,compose(
    applyMiddleware(thunk),
    reduxDextools

));
function Erying(){
    return <h2>二营</h2>
}
function Qibinglian(){
    return <h2>骑兵连</h2>
}
class Test extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props);
        return <h2>test </h2>
    }
}
ReactDOM.render(
(<Provider  store={store} >
    <BrowserRouter>  
        <div>
            <ul>
                <li> 
                    <Link to='/'>一营</Link>     
                </li> 
                <li> 
                    <Link to='/erying'>二营</Link>     
                </li>  
                <li> 
                    <Link to='/qibinglian'>骑兵连</Link>     
                </li>
                

            </ul>
            {/*  
                 path：路径
                 exact 完全匹配
                 component 定义对应组件
             */}

             
               
                <Route path='/' exact component={App}></Route>
                <Route path='/erying' component={Erying}></Route>  
                <Route path='/qibinglian'  component={Qibinglian}></Route>
               
                <Route path='/test'  component={Test}></Route> 

                {/* Redirect 中to重新定义路径 */}
                <Redirect path='/:test' to='/'></Redirect>
                
                 
            {/* Switch 只匹配显示一个 */}
            {/* <Switch>
                
                  <Route path='/' exact component={App}></Route>
                    <Route path='/erying' component={Erying}></Route>  
                    <Route path='/qibinglian'  component={Qibinglian}></Route> 
                    <Route path='/:default'  component={Test}></Route>   
                <Switch>     
            */}
        </div>     
    </BrowserRouter>
    
</Provider>),document.getElementById('root')
);

