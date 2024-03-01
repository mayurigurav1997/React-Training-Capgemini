import { useContext } from "react";
import BankContext from "./BankContextConfig";

export let BankAccountsList = () => {
    const { database, modifyRecords, select } = useContext(BankContext);
    let show_click = (account) => {
        select(account);
    };


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
                    {database.map(item => {
                        // console.log()
                        let totalWithDraw = item.transactions.reduce((sum, tran) => {
                            if (tran.type == "WITHDRAW") {
                                // console.log(tran.amount);
                                return sum + Number(tran.amount.split(" ")[1]);
                            }
                            return sum;
                        }, 0);
                        let totalDEPOSITE = item.transactions.reduce((sum, tran) => {
                            if (tran.type == "DEPOSIT") {
                                // console.log(tran.amount);
                                return sum + Number(tran.amount.split(" ")[1]);
                            }
                            return sum 
                        }, 0);
                        return (<tr key={item.account_number}>
                            <td>{item.account_number}</td>
                            <td>{item.account_holder}</td>
                            <td>{item.balance}</td>
                            <td>INR {totalWithDraw}</td>
                            <td>INR {totalDEPOSITE}</td>
                            <td>
                                <button className="btn btn-sm btn-primary" onClick={() => { show_click(item); }}>show</button>
                            </td>
                        </tr>);
                    }
                    )}
                </tbody>
            </table>
        </div>
    );
};
