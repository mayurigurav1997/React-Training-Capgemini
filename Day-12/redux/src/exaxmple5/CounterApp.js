import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


let CounterApp = () => {
    let state = useSelector(state=>state.counter);
    let dispatch = useDispatch();
    let [x, setValue] = useState(0);

    let increase_click = () => {
        //call store reducer states and unique action used to modify state
        dispatch({type:"INCREASE_CNT", payload:null});
    }

    let decrease_click = () => {
        dispatch({type:"DECREASE_CNT", payload:null});
    }
    let reset_click = () => {
        dispatch({type:"RESET_CNT", payload:null});
    }
    

    let read = (event) => {
        setValue(Number(event.target.value));
    }

    let save_click = () => {
        dispatch({type:"MODIFY_DEFAULT", payload:x});
    }

    return (
        <div className="justify-content-center d-flex">
            <div className="card shadow" style={{width:"250px"}}>
                <div className="card-body">
                    <pre>{JSON.stringify(state)}</pre>
                    <h1 className="text-center">{state.value}</h1>

                    <input type="text" className="text-center form-control" name="default_increase" onChange={read} />
                    <button className="btn btn-primary btn-sm mx-2 my-3" onClick={save_click}>Save</button>
                </div>

                <div className="card-footer">
                    <button className="btn btn-sm btn-secondary mx-2 my-1" onClick={increase_click}>Increase</button>
                    <button className="btn btn-sm btn-secondary mx-2 my-1" onClick={decrease_click}>Decrease</button>
                    <button className="btn btn-sm btn-secondary mx-2 my-1" onClick={reset_click}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default CounterApp;