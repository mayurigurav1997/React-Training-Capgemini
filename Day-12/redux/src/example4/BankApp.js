import { useContext, useState } from "react"
import BankContext from "./BankContextConfig"



let BankHeader = () => {

    return (
        <>
            <div className="row bg-dark" data-bs-theme="dark">
                <div className="col-lg-6 d-flex align-items-center">
                    <h2 className="text-white px-4 py-0">Context Api - Bank App</h2>
                </div>

                <div className="col-lg-6">
                    <div className="row justify-content-end">
                        <Transaction />
                    </div>
                </div>
            </div>
        </>
    )
}

let BankAccountsList = () => {
    const { database, modifyRecords, select } = useContext(BankContext);

    let show_click = (account) => {
        select(account);
    }

    return (
        <div className="container">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ACCOUNT NUMBER</th>
                        <th>ACCOUNT NAME</th>
                        <th>BALANCE</th>
                        <th>TOTAL WITHDRAW</th>
                        <th>TOTAL DEPOSIT</th>
                        <th>ACTION</th>
                    </tr>
                </thead>

                <tbody>
                    {database.map(item =>
                        <tr key={item.account_number}>
                            <td>{item.account_number}</td>
                            <td>{item.account_holder}</td>
                            <td>{item.balance}</td>
                            <td>{/* Write reduce function and show total withdraw */}</td>
                            <td>{/* Write reduce function and show total deposit */}</td>
                            <td>
                                <button className="btn btn-sm btn-primary" onClick={() => { show_click(item) }}>show</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}


let Withdraw = () => {
    const { database, modifyRecords, selected_account } = useContext(BankContext);

    let withdraw_click = () => {
        const amount = Number(prompt("Enter Withdraw Amount :"));
        //TODO: debit amount for selected bank account only if amount is within the balance
        //TODO: append withdraw transaction in database.transactions
    }

    return (
        <>
            <button className="btn btn-light fw-bold" onClick={withdraw_click}>Withdraw</button>
        </>
    )
}

let Deposit = () => {
    const { database, modifyRecords, selected_account } = useContext(BankContext);

    let deposit_click = () => {
        const amount = Number(prompt("Enter Deposit Amount :"));
        //TODO: credit amount for selected bank account
        //TODO: append deposit transaction in database.transactions
    }
    return (
        <>
            <button className="btn btn-light fw-bold" onClick={deposit_click}>Deposit</button>
        </>
    )
}

let Transaction = () => {
    const { selected_account } = useContext(BankContext);
    return (
        <>

            <div className="row">
                <div className="col-lg-4 d-flex justify-content-end align-items-center">
                    <Deposit />
                </div>
                <div className="col-lg-4 d-flex justify-content-end align-items-center">
                    <Withdraw />
                </div>
                <div className="col-lg-4 d-flex justify-content-end">
                    <p className="text-white align-center">Available Balance : <br />INR {selected_account != null ? selected_account.balance : 0}</p>
                </div>
            </div>

        </>
    )
}



const initial_state = [
    { account_number: 28798422, account_holder: "Smith Devid", balance: "INR 45000", status: "ACTIVE", transactions: [{ type: "WITHDRAW", amount: "INR 6000", }] },
    { account_number: 39849285952, account_holder: "James Devid", balance: "INR 12000", status: "ACTIVE", transactions: [{ type: "WITHDRAW", amount: "INR 6000", }] },
    { account_number: 49849285952, account_holder: "Kang Eliz", balance: "INR 8000", status: "ACTIVE", transactions: [{ type: "WITHDRAW", amount: "INR 6000", }] },
    { account_number: 59849285952, account_holder: "Peter James", balance: "INR 9000", status: "ACTIVE", transactions: [{ type: "WITHDRAW", amount: "INR 6000", }] },
    { account_number: 69849285952, account_holder: "Shrenik Shah", balance: "INR 4600", status: "ACTIVE", transactions: [{ type: "WITHDRAW", amount: "INR 6000", }] },
]



let BankApp = () => {
    let [database, modifyRecords] = useState(initial_state);
    let [selected_account, select] = useState(null);


    return (
        <>
            <BankContext.Provider value={{ database, modifyRecords, selected_account, select }}>
                <BankHeader />
                <BankAccountsList />
            </BankContext.Provider>
        </>
    )
}

export default BankApp;