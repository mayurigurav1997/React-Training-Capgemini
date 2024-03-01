import { useContext } from "react";
import BankContext from "./BankContextConfig";

export let Deposit = () => {
    const { database, modifyRecords, selected_account } = useContext(BankContext);
    console.log(selected_account,"inside the deposite")

    let deposit_click = () => {
        const amount = Number(prompt("Enter Deposit Amount :"));
        const newDatabase = database.map(item => item.account_number==selected_account.account_number ?{
            ...item,
            transactions:[...item.transactions,{ type: "DEPOSIT", amount: `INR ${amount}`, }]
        }:item)
        console.log(newDatabase)
        modifyRecords([...newDatabase]);
        //TODO: credit amount for selected bank account
        //TODO: append deposit transaction in database.transactions
    };
    return (
        <>
            <button className="btn btn-light fw-bold" onClick={deposit_click}>Deposit</button>
        </>
    );
};
