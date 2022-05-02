
import './App.css';
import Login from "./components/Login";
import {useState} from "react";

function App({loggedInInit = false, _Login = Login}) {
    const [isLoggedIn, setIsLoggedIn] = useState(loggedInInit)

    function handleLogin(credentials) {
        if (credentials.username === 'bob' &&
            credentials.password === 'pass')
            setIsLoggedIn(true)
    }

    if(isLoggedIn)
        return <>
            <h1>Hey there</h1>
        </>
   else
        return <_Login onLogin={handleLogin}/>
}

export default App;
