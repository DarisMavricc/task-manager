import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {useFormik} from 'formik'
import * as Yup from "yup";
import axios from 'axios'
import "./register.css"

export const Register = () => {


    const [err,setErr] = useState('');


    const formik = useFormik({
        initialValues: {
          fname: "",
          lname: "",
          email: "",
          password: "",
        },
    
        validationSchema: Yup.object().shape({
            fname: Yup.string().required("First Name is required!").min(3,"Minimum lenght of your First Name must be 3 characters!"),
            lname: Yup.string().required("Last Name is required!").min(3,"Minimum lenght of your Last Name must be 3 characters!"),
            email: Yup.string().required("Email is required!").email("Your email is not valid!"),
            password: Yup.string().required("Password is required!").min(5,"Minimum lenght of your password must be 5 characters!"),
        }),
    
        onSubmit: async () => {
            const data = {
                fname: formik.values.fname,
                lname: formik.values.lname,
                email: formik.values.email,
                password: formik.values.password
            };
            try {
                console.log(data);
              } catch (err) {
                setErr(err.response.data);
            }
          
      }});


    return (
            <div className="register">
                <h1>Sign Up</h1>
                {err ? <p style={{color:"red"}}>{err}</p> : <p></p>}
                <label for="fname">First Name</label>
                <input type="text" name="fname" onChange={formik.handleChange}/>
                {formik.errors.fname && formik.touched.fname ? (
                <p className="error">{formik.errors.fname}</p>
                ) : null}
                <label for="lname">Last Name</label>
                <input type="text" name="lname" onChange={formik.handleChange}/>
                {formik.errors.lname && formik.touched.lname ? (
                <p className="error">{formik.errors.lname}</p>
                ) : null}
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
                <div className="other">
                    <p>Already have an account?</p>
                </div>
                <button type="button" onClick={formik.handleSubmit}>REGISTER</button>
            </div>
    )
}