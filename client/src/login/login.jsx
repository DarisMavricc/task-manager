import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik'
import axios from 'axios'
import * as Yup from "yup";
import './login.css';
import  { AuthContext } from '../context/Auth.js'




export const Login = () => {


    const [err,setErr] = useState('');

    const navigate = useNavigate();

    const {currentUser} = useContext(AuthContext);

    const {login} = useContext(AuthContext);


    useEffect(() => {
        if(currentUser) {
            navigate('/')
        } else {
            navigate('/login');
        }
    },[])



    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
    
        validationSchema: Yup.object().shape({
            email: Yup.string().required("Email is required!").email("Your email is not valid!"),
            password: Yup.string().required("Password is required!").min(5,"Minimum lenght of your password must be 5 characters!"),
        }),
    
        onSubmit: async () => {
            const data = {
                email: formik.values.email,
                password: formik.values.password
            };
            try {
                await login(data);
                navigate('/');
              } catch (err) {
                setErr(err.response.data)
            }
          
      }});

    return (
            <div className="login">
                <h1>Sign In</h1>
                {err ? <p style={{color:"red"}} >{err}</p> : <p></p>}
                <label for="email">Email</label>
                <input type="email" name="email" onChange={formik.handleChange}/>
                {formik.errors.email && formik.touched.email ? (
                <p className="error">{formik.errors.email}</p>
                ) : null}
                <label for="password">Password</label>
                <input type="password" name="password" onChange={formik.handleChange}/>
                {formik.errors.password && formik.touched.password ? (
                <p className="error">{formik.errors.password}</p>
                ) : null}
                <button onClick={formik.handleSubmit}>LOG IN</button>
                <div className="other">
                    <p>Forgot Password?</p>
                    <p>Don't have an account</p>
                </div>
            </div>
    )
}