import React from 'react'

export default function Login(details) {
    return (
        <div>
            {console.log(details)}
            Logged in : {details.username}
        </div>
    )
}
