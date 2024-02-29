

let CardComponent = () => {
    return (
        <div className="row g-2">
            <div className="col-md-3">
                <div className="card m-2 p-2 shadow">
                    <p className="fw-bold text-center">Total Employees</p>
                    <h2 className="text-center">10</h2>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card m-2 p-2 shadow">
                    <p className="fw-bold text-center">Departments</p>
                    <h2 className="text-center">2</h2>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card m-2 p-2 shadow">
                    <p className="fw-bold text-center">Technologies</p>
                    <h2 className="text-center">4</h2>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card m-2 p-2 shadow">
                    <p className="fw-bold text-center">Projects</p>
                    <h2 className="text-center">91</h2>
                </div>
            </div>
        </div>
    )
}

export default CardComponent;