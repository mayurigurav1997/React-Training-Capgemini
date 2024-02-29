import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import EmployeeComponent from '../example1/Employee';

let AppRouterComponent = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="" element={<EmployeeComponent />} />
                    <Route path="**" element={<h1 style={{color:"red"}}>Page not found!</h1>} />
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouterComponent;