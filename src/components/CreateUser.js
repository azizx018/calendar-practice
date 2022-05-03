import {useState} from "react";


export default function CreateUser({onAddUser}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function onUsernameChange(event) {
        setUsername(event.target.value)
    }
    function onPasswordChange(event) {
        setPassword(event.target.value)
    }


    function handleSubmit(event) {
        event.preventDefault()
        onAddUser({username, password})
    }


    return <>
        <form onSubmit={handleSubmit}>
            <label>
                <input type={'text'} placeholder={'username'} onChange={onUsernameChange}/>
            </label>
            <label>
                <input type={'text'} placeholder={'password'} onChange={onPasswordChange}/>
            </label>
            <button type={'submit'}>Create Account</button>

        </form>

    </>
}