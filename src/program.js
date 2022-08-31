import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Billing from './pages/Billing/Billing';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Notifications from './pages/Notifications/Notifications';
import Tables from './pages/Tables/Tables';
import Profile from './pages/Profile/Profile';

const Program = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<Dashboard />}/>
                    <Route path = "/tables" element = {<Tables />} />
                    <Route path = "/billing" element = {<Billing />} />
                    <Route path = "/notifications" element = {<Notifications />}/>
                    <Route path = "/profile" element = {<Profile />}/>
                    <Route path = "/sign-in" element = {<Signin />} />
                    <Route path = "/sign-up" element = {<Signup />} />
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Program;