import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { axios } from "axios"
const initialState={
    value:0
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCounterValue.fulfilled,(state,action)=>{
            console.log(JSON.stringify(action.payload.data,null,3))
            state.value = action.payload.data[0]
        })
        .addCase(fetchCounterValue.pending,(state,action)=>{
            console.log("API cal still in pending sttate")
            state.status = false;
        })
        .addCase(fetchCounterValue.rejected,(state,action)=>{
            console.log("API call caught inerror", action.error)
        })
    }

})

const fetchCounterValue = createAsyncThunk("",async()=>{
    const response = axios.get(`${process.env.REACT_APP_API_URL}/calculator`)
    const result = await response;
     return result
})


export default counterSlice.reducer;