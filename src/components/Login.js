import {useState} from "react";

export default function Login(properties) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function sendCredentials() {
        properties.onLogin({username, password})
    }

    function onUsernameChange(event) {
        setUsername(event.target.value)
    }
    function onPasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        sendCredentials()
    }

    return <>
        <h1>Welcome! Login For your Calendar</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <input type={'text'} placeholder={'username'} onChange={onUsernameChange}/>
            </label>
            <label>
                <input type={'text'} placeholder={'password'} onChange={onPasswordChange}/>
            </label>
            <button type={'submit'}>Submit</button>

        </form>


    </>
}