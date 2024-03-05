import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLoginRequest } from "../service/LoginService";


let LoginForm = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.login);

    let read_field = (event) => {
        const { name, value } = event.target;

        if (value == "") {

        }
        else {
            dispatch({ type: "READ", payload: { name: name, value: value } });
        }
    }

    let login_click = () => {

        dispatch({ type: "STATUS_CHANGE", payload: null });

        setTimeout(() => {

            let pobj = handleLoginRequest(state.fields.email);

            pobj.then(response => {
                console.log(JSON.stringify(response, null, 3));
                if (response.data) {
                    const [user] = response?.data;
                    console.log(user, "insid ethe user")
                    if (user?.password === state.fields.password) {
                        dispatch({ type: "LOGIN_SUCCESS", payload: user });
                        alert("Login Success");
                        sessionStorage.setItem("token", user.token);
                    }
                    else {
                        alert("Invalid Credentials");
                    }
                }
                else {
                    alert("Please enter the correct information")
                }

            })

            pobj.then(error => {
                console.log(JSON.stringify(error, null, 3));
                alert("Please enter the correct information")
            });

            dispatch({ type: "STATUS_CHANGE", payload: null });


        }, 3000);


    }
    return (
        <div className="justify-content-center mt-5 p-3 d-flex">
            <div className="card shadow m-4" style={{ width: "300px" }}>
                <div className="card-header">
                    <h3>Login App</h3>
                </div>
                <div className="card-body">
                    <pre>{JSON.stringify(state, null, 3)}</pre>
                    <input type="email" className="form-control my-2" placeholder="email*" name="email" onChange={read_field} />
                    <input type="password" className="form-control my-2" placeholder="password*" name="password" onChange={read_field} />
                </div>

                <div className="card-fotter">
                    <button disabled={!state.status} className="btn btn-secondary fw-bold m-3 float-end" onClick={login_click}>
                        <span hidden={!state.status}>login</span>
                        <div className="spinner-border" role="status" hidden={state.status}>
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;