
import { useState } from 'react';
import { Login, SignUp } from '../../components';
import social from '../../images/authenticate.svg'
const Authenticate = () => {
    const [showLogin,setShowLogin]=useState(true);
    const toggleShowLogin=()=>setShowLogin(!showLogin);
    return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-tl from-green400 to-indigo900">
               {showLogin?  <Login toggleLogin={toggleShowLogin} />:<SignUp toggleLogin={toggleShowLogin}/>}
    </div>

    );
}





export {Authenticate}
