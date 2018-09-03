const add_gun = '加机关枪'
const remove_gun = '减机关枪'

export function counter(state=0,action){
    switch(action.type){
        case add_gun:
            return state + 1;
        case remove_gun:
            return state - 1;
        default :
            return state;
    }
}


export function addGun(){
    return {type:add_gun}
}
export function addGunAsync(){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(addGun());
        },500);

    }
}
export function removeGun(){
    return {type:remove_gun}
}


