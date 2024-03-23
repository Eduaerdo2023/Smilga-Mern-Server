import { Form, redirect, useNavigation, Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow, Logo } from '../components'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'


export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    await customFetch.post('/auth/register', data)
    toast.success('Registration successfull')
    return redirect('/login')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}
const Register = () => {
  const navigation = useNavigation()

  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo />
        <h4>Register</h4>
        <div className="form-row">
          <FormRow type='text' id='name' name='name' defaultValue='Eduardo' />
          <FormRow type='text' id='lastName' name='lastName' labelText='Last Name' defaultValue='Bes' />
          <FormRow type='text' id='location' name='location' defaultValue='Mexico' />
          <FormRow type='email' id='email' name='email' defaultValue='mail@mail.com' />
          <FormRow type='password' id='password' name='password' defaultValue='password' />
        </div>
        <button type='submit' className='btn btn-block' disabled={isSubmitting}>{isSubmitting ? 'submitting...': 'submit'}</button>
        <p>Already a memeber?
          <Link to='/login' className='member-btn'>Login</Link>
        </p>
      </Form>

    </Wrapper>
  )
}

export default Register
