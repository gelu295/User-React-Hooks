import React, {useState, useContext} from 'react';

import {Context} from '../Context'

function Login() {
    const [userLogin, setUserLogin] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const {username, password} = useContext(Context)
    console.log(userLogin)

    const handleChange = (event) => {
        const {name, value} = event.target
        
    }

    return (
        <div className="container">
            <form className="form">
                <h2>Sign In</h2>
                <div className="form-control">
                    <label>Username
                    <input
                        type="text"
                        value={userLogin} 
                        name="userLogin" 
                        placeholder="Enter username"
                        onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label>Password
                    <input
                        type="text"
                        value={userPassword}
                        name="userPassword"
                        placeholder="Enter password"
                        onChange={handleChange}
                        />
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;