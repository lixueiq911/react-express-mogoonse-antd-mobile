import { createStore } from 'redux'


/* 
    1、新建store 
    2、通过reducer建立
    3、根据老的state 和action 生成新的state
*/

function counter(state=0,action){
    switch(action.type){
        case '加机关枪':
            return state + 1;
        case '减机关枪':
            return state - 1;
        default :
            return 10;


    }
}

const store = createStore(counter);
    // const init = store.getState();
    // console.log(init);
    // store.dispatch({type:'加机关枪'})
    // console.log(store.getState());
    // store.dispatch({type:'加机关枪'})
    // console.log(store.getState());
    // store.dispatch({type:'减机关枪'})
    // console.log(store.getState());

//订阅
function listener(){
    const current = store.getState();
    console.log(`当前机关枪 ${current} 把`)

}
store.subscribe( listener );
    store.dispatch({type:'加机关枪'})
   
    store.dispatch({type:'加机关枪'})
    
    store.dispatch({type:'减机关枪'})
    