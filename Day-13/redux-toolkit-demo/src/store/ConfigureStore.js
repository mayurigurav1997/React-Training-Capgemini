import {configureStore} from '@reduxjs/toolkit'
import CounterSlice from './CounterSlice';

const store = configureStore(
  {
    reducer:{
        counter:CounterSlice
       },
    //    middleware:(getDefaultMiddleware)=>{
    //        getDefaultMiddleware({
    //         serializableCheck:false
    //        })
    //    }
  }

)
export default store;