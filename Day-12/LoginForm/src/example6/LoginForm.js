import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


let LoginForm = () => {

    const dispatch = useDispatch();
    const state = useSelector(state=>state.login);

    let read_field = (event) => {
        const {name, value} = event.target;

        if(value=="")
        {

        }
        else
        {
            dispatch({type:"READ", payload:{name:name, value:value}});
        }
    }

    return (
        <div className="justify-content-center mt-5 p-3 d-flex">
            <div className="card shadow m-4" style={{width:"300px"}}>
                <div className="card-header">
                    <h3>Login App</h3>
                </div>
                <div className="card-body">
                    <pre>{JSON.stringify(state,null,3)}</pre>
                    <input type="email" className="form-control my-2" placeholder="email*" name="email" onChange={read_field}/>
                    <input type="password" className="form-control my-2" placeholder="password*" name="password" onChange={read_field}/>
                </div>

                <div className="card-fotter">
                    <button className="btn btn-secondary fw-bold m-3 float-end">login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;