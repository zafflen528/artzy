import React from 'react'
import { useFormik } from 'formik'
import "../styles/LoginForm.css"

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password : ''
    },
    onSubmit: values => {
      let userToken = values.email.concat(values.password)
      localStorage.setItem("token", userToken);
      console.log(localStorage.getItem("token"));
      // go to store page
    }
  })
  return (
    <form onSubmit={formik.handleSubmit} className="login-form">
      <input
        id='email'
        name='email'
        type="email"
        placeholder='EMAIL'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <input
        id='password'
        name='password'
        type="password"
        placeholder='PASSWORD'
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default LoginForm