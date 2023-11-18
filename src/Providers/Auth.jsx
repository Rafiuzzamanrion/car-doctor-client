import {createContext, useEffect, useState} from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
const googleProvider = new GoogleAuthProvider();


export const AuthContext = createContext(null);
const auth = getAuth(app)

const Auth = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) => {
        setLoading();
        return createUserWithEmailAndPassword(auth,email,password);
    };

    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };

    const googleSignIn = ()=>{
        setLoading();
        return signInWithPopup(auth,googleProvider);
    }

    const handleSignOut = () =>{
        setLoading()
        return signOut(auth);   
    }





    useEffect(()=>{
    const  unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false);

 if(currentUser && currentUser.email){
        const loggedUser = {
        email:currentUser.email
    }
    // ------------------start access token part---------------------
        fetch('https://car-doctor-server-inyegj4x9-rafiuzzamanrion.vercel.app/jwt',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(loggedUser)
      })
      .then(res => res.json())
      .then(data =>{
        // console.log('jwt response',data)
        // -------local storage is not full safe for storing access token: it is 2nd best ------
        localStorage.setItem('car-doctor-token',data.token)
        // ---------end the access token part---------
        
      })
   }
   else{
          localStorage.removeItem('car-doctor-token')
       }
        });
        return ()=>{
            return unsubscribe();
        }
    },[]);

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        handleSignOut,
        auth,
        googleSignIn,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Auth;