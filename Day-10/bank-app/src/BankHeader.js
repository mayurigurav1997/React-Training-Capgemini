import { Transaction } from "./Transaction";

export let BankHeader = () => {

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
    );
};
