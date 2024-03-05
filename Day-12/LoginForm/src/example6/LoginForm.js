import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLoginRequest } from "../service/LoginService";

const LoginForm = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.login);
    const [isLoading, setIsLoading] = useState(false);

    const readField = (event) => {
        const { name, value } = event.target;
        dispatch({ type: "READ", payload: { name, value } });
    };

    const loginClick = async () => {
        setIsLoading(true);
        dispatch({ type: "STATUS_CHANGE", payload: null });

        try {
            const response = await handleLoginRequest(state.fields.email);
            if (response?.data?.length>0) {
                const [user] = response.data;
                if (user?.password === state.fields.password) {
                    dispatch({ type: "LOGIN_SUCCESS", payload: user });
                    alert("Login Success");
                    sessionStorage.setItem("token", user.token);
                } else {
                    alert("Invalid Credentials");
                }
            } else {
                alert("Please enter the correct information");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Please enter the correct info");
        }

        setIsLoading(false);
        dispatch({ type: "STATUS_CHANGE", payload: null });
    };

    return (
        <div className="justify-content-center mt-5 p-3 d-flex">
            <div className="card shadow m-4" style={{ width: "300px" }}>
                <div className="card-header">
                    <h3>Login App</h3>
                </div>
                <div className="card-body">
                    <pre>{JSON.stringify(state, null, 3)}</pre>
                    <input type="email" className="form-control my-2" placeholder="email*" name="email" onChange={readField} />
                    <input type="password" className="form-control my-2" placeholder="password*" name="password" onChange={readField} />
                </div>
                <div className="card-footer">
                    <button disabled={isLoading} className="btn btn-secondary fw-bold m-3 float-end" onClick={loginClick}>
                        <span hidden={isLoading}>Login</span>
                        <div className="spinner-border" role="status" hidden={!isLoading}>
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
