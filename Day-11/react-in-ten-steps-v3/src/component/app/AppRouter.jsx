import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HolidayComponent from '../example4/Holiday';

let AppRouterComponent = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HolidayComponent />} />
                    <Route path="**" element={<h1 style={{color:"red"}}>Page not found!</h1>} />
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouterComponent;