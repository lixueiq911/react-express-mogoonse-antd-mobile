import React from 'react'
import ReactDOM from 'react-dom'
import { createStore,applayMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import App from './app'
import { counter,addGun,removeGun } from './index.redux'
const store = createStore(counter,applayMiddleware(thunk));


function render(){
    ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun}/>,document.getElementById('root'));

}
render()
store.subscribe(render);