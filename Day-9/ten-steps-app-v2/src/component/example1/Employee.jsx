import CardComponent from "./Card";
import EmpFormComponent from "./EmpForm";
import EmployeeTableComponent from "./EmpTable";


let EmployeeComponent = () => {

    return (
        <div className="p-1">
            <h1 style={{color:"darkblue", textAlign:"center"}}>Nested Components</h1>

            <div className="my-2">
                <CardComponent />
            </div>   

            <div className="row g-1">
                <div className="col-md-6">
                    <EmpFormComponent />
                </div>

                <div className="col-md-6">
                    <EmployeeTableComponent />
                </div>
            </div>  

            <div className="row g-1 my-2">
                <div className="justify-content-center d-grid">
                <img src="./images/ex1.png" style={{"width":"500px"}}/>
                </div>
            </div>


        </div>
    )
}

export default EmployeeComponent;