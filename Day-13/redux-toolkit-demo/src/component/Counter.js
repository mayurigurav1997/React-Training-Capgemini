import React from 'react'
import {useDispatch} from "react-redux"

const Counter = () => {
  const state= useSelector(state=> state.counter)
  const dispatch=useDispatch()
  useEffect(()=>{
    fetchCounterValue();
  })
  return (
    <div className="card m-4 p-4" style={{width:"300px"}}>
        <div className="card-header">
            <h4>Counter App</h4>
        </div>
        <div className="card-body">
          <h1 className='text-center'>{JSON.stringify(state)}</h1>
        </div>

        <div className="card-footer">
          <button className="btn btn-secondary mx-2">Increase</button>
          <button className="btn btn-secondary mx-2">Decrease</button>
        </div>
      
    </div>
  )
}

export default Counter
