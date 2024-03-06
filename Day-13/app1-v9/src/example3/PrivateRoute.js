

let PrivateRoute = ({children}) => {
    return sessionStorage.getItem("user")==="admin"?children:<h3 className="text-danger">Restricted page.</h3>
}

export default PrivateRoute;