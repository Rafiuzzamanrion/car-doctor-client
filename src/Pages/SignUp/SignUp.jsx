import {Link} from 'react-router-dom';
import photo from '../../assets/images/login/login.svg'
import {useContext, useState} from 'react';
import {AuthContext} from '../../Providers/Auth';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const {createUser} = useContext(AuthContext);

  // -----------------alert----------------------

  const alertSuccess = <div className="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>You have successfully created an account !!</span>
</div>;
const alertError1 = <div className="alert alert-warning">
<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
<span>Warning: Password must have at least one Uppercase Character !</span>
</div>
const alertError2 = <div className="alert alert-warning">
<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
<span>Warning: Password must have at least one LowerCase Character !</span>
</div>
const alertError3 = <div className="alert alert-warning">
<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
<span>Warning: Password must have at least one Special Symbol !</span>
</div>
const alertError4 = <div className="alert alert-warning">
<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
<span>Warning: Password must have at least 8 Character !</span>
</div>
const alertError5 = <div className="alert alert-warning">
<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
<span>Warning: The email already in use !!</span>
</div>



    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
             // validation or pass expression
             if (!/^(?=.*[A-Z]).*$/.test(password)) {
              setError(alertError1)
              setSuccess('')
              
          return ;
            }
          else  if (!/^(?=.*[a-z]).*$/.test(password)) {
              setError(alertError2)
              setSuccess('')
              return ;
            }
           else if (!/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)) {
              setError( alertError3)
              setSuccess('')
              return;
  
      }
      else if(!password.length >= 8){
        setError(alertError4)
        setSuccess('')
        return;
      }


       createUser(email,password)
       .then(result => {
        const user = result.user;
       
        setSuccess(alertSuccess)
        setError('')
        console.log(user)
       })
       .catch(error =>{
      console.log(error)
      setError(alertError5)
      setSuccess('')
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
            <form onSubmit={handleSignUp} className="card-body" data-aos="fade-right"data-aos-easing="linear"
        data-aos-duration="1000">
            <h1 className="text-5xl font-bold text-center">Sign Up</h1>
            <div className='text-success mt-1'>{success}</div>
            <div className='text-danger'>{error}</div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
              </div>
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
              </div>
              <div className="form-control mt-6">
                
                <input className="btn btn-error hover:bg-red-600" type="submit" value="Sign Up" />
              </div>
              <p>Already have an account ? <Link className='text-red-500 font-bold' to='/login'> Login</Link></p>
             <SocialLogin></SocialLogin>
               
            </form>
          
          </div>
          
        </div>
    
      </div>
    );
};

export default SignUp;