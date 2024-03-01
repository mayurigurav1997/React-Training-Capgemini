import { useContext } from "react";
import BankContext from "./BankContextConfig";
import { Withdraw } from "./Withdraw";
import { Deposit } from "./Deposit";


export let Transaction = () => {
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
                    <p className="text-white align-center">Available Balance : <br /> {selected_account != null ? selected_account.balance : 0}</p>
                </div>
            </div>

        </>
    );
};
