import React from 'react'
import ReactDOM from 'react-dom'
import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import { 
    HashRouter , 
    Route ,    
    Redirect,
    Switch
 } from 'react-router-dom'
import { Provider } from 'react-redux'
import Auth from './Auth'
import Dashboard from "./Dashboard";
import reducers from './reducer'
//import { counter } from './index.redux'
import './config'

const reduxDextools = window.devToolsExtension?window.devToolsExtension():f=>f;
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    reduxDextools

));

// class Test extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         console.log(this.props);
//         return <h2>test </h2>
//     }
// }
ReactDOM.render(
(<Provider  store={store} >
    <HashRouter>  
        <div>
            <Switch>
                <Route path='/login' exact component={Auth}></Route>
                <Route path='/dashboard' component={ Dashboard}></Route>  
                <Redirect to='/dashboard'></Redirect>  
            </Switch>      
        </div>     
    </HashRouter>
    
</Provider>),document.getElementById('root')
);

