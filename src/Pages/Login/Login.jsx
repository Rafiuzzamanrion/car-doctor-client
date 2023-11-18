import {Link, useLocation, useNavigate} from 'react-router-dom';
import photo from '../../assets/images/login/login.svg'
import {useContext,useState} from 'react';
import {AuthContext} from '../../Providers/Auth';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const Login = () => {

  const {signIn} = useContext(AuthContext);
  const [error,setError] = useState('');
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate()

const handleLogin = event => {

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    signIn(email,password)
    .then(result =>{
      const user = result.user;
      setError('')
      console.log(user)
      navigate(from,{replace:true})
    })
    .catch(error=>{
      console.log(error);
      setError(<div className="alert alert-error">
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Your password is wrong !! <br /> try again </span>
    </div>)
    })
}



    return (
        <div className="hero min-h-screen bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-16 w-1/2 pt-7">
           
            <img data-aos="flip-left"data-aos-easing="linear"
        data-aos-duration="1000" src={photo} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <form onSubmit={handleLogin} className="card-body"data-aos="fade-right"data-aos-easing="linear"
        data-aos-duration="1000">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <div className='text-danger'>{error}</div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                
                <input className="btn btn-error hover:bg-red-600" type="submit" value="Login" />
              </div>
              <p>New to car doctor ? <Link className='text-red-500 font-bold' to='/signup'> Sign Up</Link></p>
              <SocialLogin></SocialLogin>
            </form>
          
          </div>
          
        </div>
    
      </div>
    );
};

export default Login;