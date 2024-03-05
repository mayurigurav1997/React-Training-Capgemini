

let LoginStatus = (props) => {
    return (
        <>
            {props.status != null ?
                <div>
                    <div className="alert alert-success" hidden={props.status}>
                        <p className="fs-4 m-0 p-0">Login Successfull</p>
                    </div>

                    <div className="alert alert-danger" hidden={!props.status}>
                        <p className="fs-4 m-0 p-0">Login Failed</p>
                    </div>
                </div>:false}

        </>
    )
}

export default LoginStatus;