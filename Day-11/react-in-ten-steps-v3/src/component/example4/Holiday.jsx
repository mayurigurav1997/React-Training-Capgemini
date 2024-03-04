import { useContext, useState } from "react"
import PackageViewComponent from "./PackageView"
import SearchPackageComponent from "./SearchPackage"
import HolidayContext from './HolidayContext';
import holidayPackageList from './fakedb';

let HolidayComponent = () => {
   const [packageList,setPackageList]= useState(holidayPackageList)
   console.log(packageList,"package")
    return (
        <div className="p-1">
            <h1 style={{ color: "darkblue", textAlign: "center" }}>Context API</h1>

            <HolidayContext.Provider value={{packageList,setPackageList, holidayPackageList}}>    

                <SearchPackageComponent />
                <PackageViewComponent />
            </HolidayContext.Provider>
        </div>
    )
}

export default HolidayComponent;