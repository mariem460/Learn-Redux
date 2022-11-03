//we put state and its avlue inside the params, but usually state should be defined before
// and should be as object {att : value}
const counterReducer =(state = 0, action)=>{
    switch(action.type){
        case 'increment':
            return state + action.payload;
        case 'decrement':
            return state - action.payload;
        default:
            return state = 0;
    }
}

export default counterReducer;