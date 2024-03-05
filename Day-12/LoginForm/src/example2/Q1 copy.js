const { useState } = require("react")

let initial_state = [
    { id: 930, title: "Mouse", cost: "INR 1900", status: "AVAILABLE" },
    { id: 246, title: "Speaker", cost: "INR 3000", status: "AVAILABLE" },
    { id: 535, title: "Processor", cost: "INR 14000", status: "OUT OF STOCK" },
    { id: 634, title: "HDD", cost: "INR 4500", status: "AVAILABLE" },
    { id: 525, title: "Headphone", cost: "INR 4000", status: "AVAILABLE" },
]



let ProductInventory = () => {
    let [stock, modifyStock] = useState(initial_state);

    return (
        <>
            <ProductHeader />
            <div className="row">
                <div className="col-lg-6">
                    <ProductList stock={stock} />
                </div>
            </div>
        </>
    )
}


let ProductList = ({ stock }) => {
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>COST</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                    </tr>
                </thead>

                <tbody>
                    {stock.map(item =>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.cost}</td>
                            <td>{item.status}</td>
                            <td>
                                <button className="btn btn-primary btn-sm mx-2">ADD TO CART</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}


let ProductHeader = () => {
    let [cartItems, modifyCart] = useState([]);

    return (
        <>
            <div className="bg-primary m-0 p-0">
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="text-white p-3">Props & States Questions</h3>
                    </div>

                    <div className="col-lg">
                        <p className="float-end me-4 align-middle text-white">
                            <a href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <span><i className="bi bi-cart-check-fill text-white fs-3"></i></span>
                            </a>
                            <span className="badge rounded text-white mx-1 fs-3">{cartItems.length}</span>
                        </p>
                    </div>
                </div>
            </div>





            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Cart Items</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {cartItems.length==0?
                                <div className="alert alert-info">
                                        <span className="fw-bold fs-4">Cart is Empty!</span>
                                </div>:
                                <div>

                                </div>
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default ProductInventory;