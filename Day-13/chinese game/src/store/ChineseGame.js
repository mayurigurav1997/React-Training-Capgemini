

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
        return {...state, [payload.name]:payload.value};
    }else if(type=="EDIT_RESPONSE"){
        const countRabbit= ((state.legs-(state.heads*2))/2)
        const countChicken = state.heads-countRabbit
        return {...state,response:{rabbit: countRabbit, chicken:countChicken }}
    }
    return state;
}

export default chineseGameReducer;