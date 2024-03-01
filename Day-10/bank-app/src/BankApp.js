import { useState } from "react"
import BankContext from "./BankContextConfig"
import { BankHeader } from "./BankHeader"
import { BankAccountsList } from "./BankAccountsList";

const initial_state = [
    { account_number: 28798422, account_holder: "Smith Devid", balance: "INR 45000", status: "ACTIVE", transactions: [{ type: "WITHDRAW", amount: "INR 6000", },{ type: "WITHDRAW", amount: "INR 2000", },{ type: "DEPOSIT", amount: "INR 3000",  },{ type: "DEPOSIT", amount: "INR 1000", }] },
    { account_number: 39849285952, account_holder: "James Devid", balance: "INR 12000", status: "ACTIVE", transactions: [{ type: "WITHDRAW", amount: "INR 4000", }] },
    { account_number: 49849285952, account_holder: "Kang Eliz", balance: "INR 8000", status: "ACTIVE", transactions: [{ type: "WITHDRAW", amount: "INR 3000", }] },
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