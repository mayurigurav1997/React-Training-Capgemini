

const initialState = {
    heads: 150,
    legs: 400,
    response: {
        rabbit: 50,
        chicken: 100
    },
    status: true
}

let chineseGameReducer = (state = initialState, action) => {
    const { type, payload } = action;

    if (type == "READ") {
        if(!payload.value){
            return { ...state, status: false }
        }else{
            return { ...state, [payload.name]: payload.value ,status: true};
        }
    } else if (type == "EDIT_RESPONSE") {

        const countRabbit = ((state.legs - (state.heads * 2)) / 2)
        const countChicken = state.heads - countRabbit
        if (Number.isInteger(countRabbit) && countRabbit>0 && countChicken>0 && Number.isInteger(countChicken)) {
            return { ...state, response: { rabbit: countRabbit, chicken: countChicken } ,status: true }
        } else {
            return { ...state, status: false }
        }
    }
    return state;
}

export default chineseGameReducer;