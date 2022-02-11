import './Login.css'
import axios from 'axios';
import { useState } from 'react';

function LoginForm(props) {

    const [formValues, setFormValues] = useState({});

    const updateInputValue = (event) => {
        setFormValues({
            ...formValues,
            [event.currentTarget.name]: event.currentTarget.value,
        })
    }

    const onSubmit = async (event) => {

        event.preventDefault();
        const axiosConfiguration = {
            data: {
                ...formValues
            }
        }
        const response = await axios.post('http://localhost:3001/login', axiosConfiguration);
        console.log(response.data);
        
    }

    return (
        <>
            <form id='loginForm' onSubmit={onSubmit}>

                <label><h6>username</h6></label>
                <input type="text" id="username" name="username" onChange={updateInputValue}/>

                <label><h6>password</h6></label>
                <input type="password" id="password" name="password" onChange={updateInputValue}/>
            
                <input type='submit' value='submit'/>

            </form> 
        </>
    )
}


export default LoginForm;