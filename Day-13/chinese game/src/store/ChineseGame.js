

const initialState = {
    heads: 150,
    legs: 400,
    response: {
        rabbit: 50,
        chicken: 100
    },
    status: true
}

let chineseGameReducer = (state=initialState, action) => {
    const {type, payload} = action;

    if(type=="READ")
    {
        return {...state, fields:{...state.fields, [payload.name]:payload.value}};
    }
    return state;
}

export default chineseGameReducer;