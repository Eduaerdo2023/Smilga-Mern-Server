
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'

import { FormRow, Logo } from '../components'

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <div className="form-row">
          <FormRow type='text' id='name' name='name' defaultValue='Eduardo' />
          <FormRow type='text' id='lastName' name='lastName' labelText='Last Name' defaultValue='Bes' />
          <FormRow type='text' id='location' name='location' defaultValue='Mexico' />
          <FormRow type='email' id='email' name='email' defaultValue='mail@mail.com' />
          <FormRow type='password' id='password' name='password' defaultValue='password' />
        </div>
        <button type='submit' className='btn btn-block'>submit</button>
        <p>Already a memeber?
          <Link to='/login' className='member-btn'>Login</Link>
        </p>
      </form>

    </Wrapper>
  )
}

export default Register
