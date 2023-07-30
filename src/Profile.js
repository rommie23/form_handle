import React from 'react'
import { useState } from 'react'

export default function Profile() {

    const[logIn, setLogIn] = useState(3)

        return (
            <div>
                {logIn===1?<h2>Welcome 1</h2>:logIn===2?<h2>Welcome 2</h2>:<h2>login first</h2>}
            </div>
        )
}
