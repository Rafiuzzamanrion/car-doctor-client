import {useContext} from "react";
import {AuthContext} from "../../../Providers/Auth";
import google from '../../../assets/google.png'





const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    
    const handleGoogleLogin = ()=>{
        googleSignIn()
        .then(result=>{
            console.log(result)
            
        }) 
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
            <div className="text-center my-3">OR</div>
            <div className="text-center"><button onClick={handleGoogleLogin} className="btn btn-outline btn-error"> <h1>Sign In with </h1> <div className="avatar">
  <div className="w-6 rounded-full">
    <img src={google} />
  </div>
</div></button></div>
        </div>
    );
};

export default SocialLogin;