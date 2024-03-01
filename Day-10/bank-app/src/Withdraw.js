import { useContext } from "react";
import BankContext from "./BankContextConfig";

export let Withdraw = () => {
    const { database, modifyRecords, selected_account } = useContext(BankContext);

    let withdraw_click = () => {
        const amount = Number(prompt("Enter Withdraw Amount :"));
        //TODO: debit amount for selected bank account only if amount is within the balance
        //TODO: append withdraw transaction in database.transactions
        const newDatabase = database.map(item => item.account_number==selected_account.account_number ?{
            ...item,
            balance:`INR ${item.balance.split(" ")[1] - amount}`,
            transactions:[...item.transactions,{ type: "WITHDRAW", amount: `INR ${amount}`, }]
        }:item)
        console.log(newDatabase)
        modifyRecords([...newDatabase]);
    };

    return (
        <>
            <button className="btn btn-light fw-bold" onClick={withdraw_click}>Withdraw</button>
        </>
    );
};
