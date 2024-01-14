import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {MdPermIdentity} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Header from './Header'
const Login = () => {

    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })
    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/login', loginData);
            const { success, message } = response.data;
            if (success) {
                console.log('Login successfull');
            }
            else {
                console.log(message);
            }
        }
        catch (error) {
            console.error('Login error', error);
        }
        setLoginData({
            username: '',
            password: ''
        })
    }
    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    const navigate=useNavigate();
    const loginPoped=(username,password) => {
        if(loginData.username!=''&&loginData.password!=''&&loginData.username==username&&loginData.password==password) {
        alert('Successfully Login');    
    }
}
    return (<>
    <Header />
        <div className='login'>
            
            <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLoginSubmit}>
                <div>
                <MdPermIdentity />
                <input
                    type="text"
                    name='username'
                    placeholder='Username'
                    value={loginData.username}
                    onChange={handleLoginChange}
                    required
                />
                </div>
                <div>
                <RiLockPasswordFill />
                <input
                    type="password"
                    name='password'
                    placeholder='Password'
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                />
                </div>
                

                <button type='submit'onClick={()=>{return(navigate('/quize'),loginPoped)}}>Login</button>
                <p>Not registered Yet?
                    <Link to='/register'>Register here</Link>
                </p>


            </form>

            </div>
            

        </div>
        </>);
}

export default Login