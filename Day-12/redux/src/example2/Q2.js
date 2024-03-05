import { useState } from "react"



let Addition = () => {
    return (
        <div>
            <button className="btn btn-secondary fw-bold">Addition</button>
        </div>
    )
}

let Subtraction = () => {
    return (
        <div>
            <button className="btn btn-secondary fw-bold">Subtraction</button>
        </div>
    )
}

let Multiplication = () => {
    return (
        <div>
            <button className="btn btn-secondary fw-bold">Multiplication</button>
        </div>
    )
}

let Division = () => {
    return (
        <div>
            <button className="btn btn-secondary fw-bold">Division</button>
        </div>
    )
}


const initial_state = {
    x: 10,
    y: 20,
    answers: {
        addition: { value: 0, message: "" },
        subtraction: { value: 0, message: "" },
        multiplication: { value: 0, message: "" },
        division: { value: 0, message: "" }
    },
    defaultClass: "form-control text-center", 
    errorClass: "form-control text-center border border-danger border-2"
}

let Calculate = () => {
    let [numericalData, setData] = useState(initial_state);

    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-lg-2">
                    <input type="text" className="form-control text-center" placeholder="num1" name="x" />
                    <lable className="text-danger" hidden={true}>{""}</lable>
                </div>

                <div className="col-lg-2">
                    <input type="text" className="form-control text-center" placeholder="num1" name="y" />
                    <lable className="text-danger" hidden={true}>{""}</lable>
                </div>

                <div className="col-lg">
                    <div className="card bg-light shadow p-2" hidden={true}>
                        <p className="m-0 p-0 fw-bold">Answer = {0}</p>
                    </div>
                </div>
            </div>
            
            <ol className="mt-4">
                <li>Enter numbers in Textbox and on click of respective button show answer in p-tag</li>
                <li>Apply defaultClass style to numbers textbox, handle onChange event and in case user enters values other than numbers then apply errorClass</li>
                <li>Show label message below the textbox and notify user about the error</li>
            </ol>

            <div className="row my-3">
                <div className="col-lg-2">
                    <Addition numericalData={numericalData} setData={setData} />
                </div>
            </div>

            <div className="row my-3">
                <div className="col-lg-2">
                    <Subtraction />
                </div>
            </div>

            <div className="row my-3">
                <div className="col-lg-2">
                    <Multiplication />
                </div>
            </div>

            <div className="row my-3">
                <div className="col-lg-2">
                    <Division />
                </div>
            </div>




        </div>
    )
}

export default Calculate;