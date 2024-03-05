
const initial_state = {
    fields:{
        email:"",
        password:""
    },

    status:true
}

let loginReducer = (state=initial_state, action) => {
    const {type, payload} = action;

    if(type=="READ")
    {
        return {...state, fields:{...state.fields, [payload.name]:payload.value}};
    }

    return state;
}

export default loginReducer;