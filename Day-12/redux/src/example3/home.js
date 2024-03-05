

let HomeComponent = () => {

    let admin_click = () => {
        sessionStorage.setItem("user", "admin");
        alert("Admin Logged In");
    }

    let guest_click = () => {
        sessionStorage.setItem("user", "guest");
        alert("Guest Logged In");
    }
    
    let reset_click = () => {
        sessionStorage.clear();
        alert("Session now cleared");
    }

    return (
        <div className="py-4">
            <button className="btn btn-sm btn-dark mx-3" onClick={admin_click}>admin</button>
            <button className="btn btn-sm btn-secondary mx-3" onClick={guest_click}>guest</button>
            <button className="btn btn-sm btn-danger mx-3" onClick={reset_click}>reset</button>
        </div>
    )
}

export default HomeComponent;