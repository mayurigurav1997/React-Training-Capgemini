import DepartmentComponent from "./Department";
import TechnologyComponent from "./Technology";


let EmpFormComponent = () => {

    return (
        <div className="card ms-2">
            <div className="card-header">
                <h3>Employee Form</h3>
            </div>

            <div className="card-body">
                <div className="row g-1 my-1">
                    <div className="col-md-2">
                        <input type="text" className="form-control text-center" placeholder="id" />
                    </div>
                    <div className="col-md-5">
                        <input type="text" className="form-control text-center" placeholder="first name" />
                    </div>
                    <div className="col-md-5">
                        <input type="text" className="form-control text-center" placeholder="last name" />
                    </div>
                </div>

                <div className="row g-1 my-1">
                    <div className="col-md-6">
                        <input type="date" className="form-control" />
                    </div>

                    <div className="col-md-6">
                        <DepartmentComponent />
                    </div>
                </div>

                <div className="row g-1 my-1">
                    <div className="col-md-12">
                        <p className="my-1 text-center">Select Technology</p>
                        <TechnologyComponent />
                    </div>
                </div>

                <div className="row g-1 my-1">
                    <div className="col-md-6">
                        <p className="my-1 ms-1">Count of Completed Projects</p>
                    </div>

                    <div className="col-md-6">
                        <input type="text" className="form-control text-center" placeholder="count" />
                    </div>
                </div>

                <div className="row g-1 my-1">
                    <div className="col-md-12">
                        <button className="btn btn-outline-primary float-end">Submit</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default EmpFormComponent;