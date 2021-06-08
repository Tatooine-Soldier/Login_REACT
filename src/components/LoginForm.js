import {React, useState} from 'react'
import Login from './Login.js'


export default function LoginForm() {
    const [details, setDetails] = useState({username:"",password:""})
    const handleSubmit = e => {
        e.preventDefault()
        {Login}
    }
    console.log(details)

    return (
        <div id='loginform'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="username" name="username" onChange={e => setDetails({...details, username:e.target.value})} value={details.name}/>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="password" name="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password}/>               
                <input type="submit"  id="sub_form"/>
            </form>
            
        </div>
    )
}
