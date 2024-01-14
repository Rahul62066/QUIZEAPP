import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MdPermIdentity } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { FaUser } from "react-icons/fa";
import Login from './Login'
import { useNavigate } from 'react-router-dom';
import Header from './Header'


const Register = () => {

    const [registerationData, setRegistrationData] = useState({
        name: '',
        username: '',
        password: ''
    })



    const handleRegistrationChange = (e) => {
        const { name, value } = e.target;
        setRegistrationData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/register', registerationData);
            console.log(response.data);
        }
        catch (error) {
            console.log(error);
        }
        setRegistrationData({
            name: '',
            username: '',
            password: ''
        });



    }
    const navigate = useNavigate();
    const Registerpoped = (name,username,password) => {
        if(registerationData.name!=''&& registerationData.username!=''&&registerationData.password!=''){
            
        alert('Registration Success');
        
        }
        
    }
    return (<>
        <Header />
        <div className='register'>

            <div>
                <h1>Registration Page</h1>
                <form onSubmit={handleRegistrationSubmit}>
                    <div>
                        <FaUser />
                        <input
                            type="text"
                            name='name'
                            placeholder='Your Name'
                            value={registerationData.name}
                            onChange={handleRegistrationChange}
                            required
                        />
                    </div>
                    <div>
                        <MdPermIdentity />
                        <input
                            type="text"
                            name='username'
                            placeholder='Username'
                            value={registerationData.username}
                            onChange={handleRegistrationChange}
                            required
                        />
                    </div>
                    <div>
                        <RiLockPasswordFill />
                        <input
                            type="password"
                            name='password'
                            placeholder='Password'
                            value={registerationData.password}
                            onChange={handleRegistrationChange}
                            required
                        />
                    </div>


                    <button type='submit' onClick={()=>{return(navigate('/login'),Registerpoped)}}>Register</button>
                    <p>Already registered
                        <Link to='/login' element={<Login />}> Login Here</Link>
                    </p>
                </form>
            </div>

        </div>
        </>)
}

export default Register