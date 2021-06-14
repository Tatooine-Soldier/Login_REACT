import {React, useState} from 'react'



export default function LoginForm({Login, error}) {
    const [details, setDetails] = useState({username:"",password:""})
    const handleSubmit = e => {
        e.preventDefault()
        console.log(details)
        //setDetails({...details, username:details.username, password:details.password})
        Login(details)
    }

    return (
        <div id='loginform'>
            <form onSubmit={handleSubmit}>
            {(error !== "") ? (<div>{error}</div>):""}
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="username" name="username" onChange={e => setDetails({...details, username:e.target.value})} value={details.name} required/>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="password" name="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password}/>               
                    <input type="submit"  id="sub_form"/>
                </div>
            </form>
            
            
        </div>
    )
}
