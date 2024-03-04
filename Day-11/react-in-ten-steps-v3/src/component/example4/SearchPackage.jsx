import { useContext, useState } from "react";
import HolidayContext from "./HolidayContext";

let SearchPackageComponent = () => {
  const { packageList, setPackageList, holidayPackageList } =
    useContext(HolidayContext);
  const [searchCriteria, setSearchCriteria] = useState({
    title: "",
    from: "",
    to: "",
  });

  const handleSearch = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });

    if (value) {
      const updatedContext = filterPackageList(name, value);
      setPackageList(updatedContext);
    } else {
      setPackageList(holidayPackageList);
    }
  };

  const filterPackageList = (name, value) => {
    return holidayPackageList.filter((con) => {
      if (name === "title") {
        return con.packageName.toLowerCase().includes(value.toLowerCase());
      } else if (name === "from") {
        return (
          parseFloat(con.payblePrice.substring(1).replace(/,/g, "")) >
          parseFloat(value)
        );
      } else if (name === "to") {
        const payablePrice = parseFloat(
          con.payblePrice.substring(1).replace(/,/g, "")
        );
        const from = parseFloat(value) > parseFloat(searchCriteria.from);
        console.log(searchCriteria.from,"from")
        const to = payablePrice < parseFloat(value);
        return searchCriteria.from ? from && to : to;
      }
      return true;
    });
  };

  return (
    <div className="card shadow m-3 p-2">
      <div className="row my-2 mx-1">
        <div className="col-md-6">
          <input
            type="search"
            value={searchCriteria.title}
            onChange={handleSearch}
            placeholder="search offer"
            name="title"
            className="form-control"
          />
        </div>

        <div className="col-md-3">
          <input
            type="search"
            value={searchCriteria.from}
            onChange={handleSearch}
            placeholder="Price from"
            name="from"
            className="form-control"
          />
        </div>

        <div className="col-md-3">
          <input
            type="search"
            value={searchCriteria.to}
            onChange={handleSearch}
            placeholder="Price to"
            name="to"
            className="form-control"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPackageComponent;
