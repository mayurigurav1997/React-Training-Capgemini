import { useContext, useState } from "react";
import HolidayContext from "./HolidayContext";

let SearchPackageComponent = () => {
  let { packageList, setPackageList, holidayPackageList } =
    useContext(HolidayContext);
  let [packageTitle, setPackageTitle] = useState("");
  const handlePackage = (e) => {
    setPackageTitle(e.target.value);
    if (e.target.value) {
      const searchkey = e.target.value;
      const updatedContext = packageList.filter((con) =>
        con.packageName.toLowerCase().includes(searchkey.toLowerCase())
      );
      setPackageList(updatedContext);
      //   console.log(updatedContext);
    } else {
      setPackageList(holidayPackageList);
    }
  };

  const [packageFrom, setPackageFrom] = useState("");
  const handlePackageFrom = (e) => {
    setPackageFrom(e.target.value);
    if (e.target.value) {
      const searchkey = e.target.value;
      console.log(searchkey)
      const updatedContext = packageList.filter(
        (con) => {
            return parseFloat(con.payblePrice.substring(1).replace(/,/g, '')) > parseFloat(searchkey)
        }
      );
      setPackageList(updatedContext);
      //   console.log(updatedContext);
    } else {
      setPackageList(holidayPackageList);
    }
  };
  return (
    <div className="card shadow m-3 p-2">
      <div className="row my-2 mx-1">
        <div className="col-md-6">
          <input
            type="search"
            value={packageTitle}
            onChange={handlePackage}
            placeholder="search offer"
            className="form-control"
          />
        </div>

        <div className="col-md-3">
          <input
            type="search"
            value={packageFrom}
            onChange={handlePackageFrom}
            placeholder="Price from"
            className="form-control"
          />
        </div>

        <div className="col-md-3">
          <input
            type="search"
            placeholder="Price to"
            className="form-control"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPackageComponent;
