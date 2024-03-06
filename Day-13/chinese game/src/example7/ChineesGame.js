import { useSelector,useDispatch } from "react-redux";


let RabitChickenCountApp = () => {

    let state = useSelector(state => state.game);
    const dispatch = useDispatch()

    let text_change = (event) => {
        const { name, value } = event.target;
        dispatch({ type: "READ", payload: { name, value } });
        if(name==="legs"){
            dispatch({type:"EDIT_RESPONSE",payload:null})
        }
    }
    return (
        <>
            <p className="bg-primary me-4 p-2 text-white fw-bold">Solve the Classic Ancient Chinese Puzzle</p>
            <div className="justify-content-center d-flex">
                <div className="card" style={{ width: "300px" }}>
                    <div className="card-header">
                        <h3>Chinese Game</h3>
                    </div>

                    <div className="card-body">



                        <div class="form-floating mb-3">
                            <input type="text" class="form-control text-center" id="floatingInput1" defaultValue={state.heads} name="heads" placeholder="head count*" onChange={text_change} />
                            <label for="floatingInput1">Total Heads</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="text" class="form-control text-center" id="floatingInput2" name="legs" defaultValue={state.legs} placeholder="Legs count*" onChange={text_change} />
                            <label for="floatingInput2">Total Legs</label>
                        </div>
                    </div>

                    <div className="card-footer">
                        {state.status ?
                            <div className="alert alert-info my-2 mx-1">
                                <p className="mx-2 my-0">Total Rabits : <span className="fw-bold">{state.response.rabbit}</span></p>
                                <p className="mx-2 my-0">Total Chickens : <span className="fw-bold">{state.response.chicken}</span></p>
                            </div> :

                            <div className="alert alert-danger my-2 mx-1">
                                <p className="m-0 p-0">False</p>
                            </div>}
                    </div>
                </div>
            </div>

        </>
    )
}

export default RabitChickenCountApp;