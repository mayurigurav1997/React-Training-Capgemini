import { useState } from "react";
import LoginStatus from "./LoginStatus";


let LoginComponent = () => {

    let [uname, setUsername] = useState("");
    let [pwd, setPassword] = useState("");
    let [status, toggleStatus] = useState(null);

    let read_username = (event) => {
        setUsername(event.target.value);
    }

    let read_password = (event) => {
        setPassword(event.target.value);
    }   

    let login_click = () => {
        if(uname===pwd)
        {
            toggleStatus(false);
        }
        else
        {
            toggleStatus(true);
        }
    }
    return (
        <>
            <div className="justify-content-center d-flex">
                <div className="card m-4 p-3" style={{width:"300px"}}>
                    <input type="text" placeholder="username*" name="username" className="form-control my-3" onChange={read_username}/>
                    <input type="password" placeholder="username*" name="username" className="form-control my-3" onChange={read_password}/>

                    <div>
                        <button className="btn btn-success mx-2 float-end" onClick={login_click}>login</button>
                    </div>
                </div>
            </div>

            <div className="justify-content-center d-flex">
                    <LoginStatus status={status}/>
            </div>
        </>
    )
}
export default LoginComponent;