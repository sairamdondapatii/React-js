export function reducer(state,{type,payload}){
    switch (type) {
        case 'ADD':
            return {...state,counter:state.counter + payload};
        case 'SUB':
            return {...state,counter:state.counter - payload};
        case 'LIGHT':
            return {...state,isDark:payload};
        case 'DARK':
            return {...state,isDark:payload}
        default:
           return state;
    }
}