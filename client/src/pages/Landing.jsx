import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import Logo from '../components/Logo'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
       <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>Job <span>Tracking</span> App</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero maxime nobis nemo harum, soluta deleniti? Ipsa distinctio eum maxime corrupti sapiente similique nihil fugit, corporis cumque perferendis aspernatur nulla mollitia?</p>
          <Link to='/register' className='register-link btn'>register</Link>
          <Link to='/login' className='btn '>login/demo user</Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img' />
      </div>


    </Wrapper>
  )
}



export default Landing
