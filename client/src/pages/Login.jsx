import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'

import { FormRow, Logo } from '../components'
Wrapper
const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Login</h4>
        <div className='form-row'>
          <FormRow type='text' id='name' name='name' defaultValue='Eduardo' />
          <FormRow type='email' id='email' name='email' defaultValue='mail@mail.com' />
          <FormRow type='password' id='password' name='password' defaultValue='password' />
        </div>
        <button type='submit' className='btn btn-block'>submit</button>
        <button type='button' className='btn btn-block'>Explore the App</button>
        <p>Not a member yet?
          <Link to='/register' className='member-btn'>Register</Link>
        </p>
      </form>

    </Wrapper>
  )
}

export default Login
