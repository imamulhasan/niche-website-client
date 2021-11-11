import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, getIdToken} from "firebase/auth";


initializeFirebase()

const useFirebase = () =>{
    const [user, setUser]=useState({})
    const [error, setError]=useState('')
    const [isLoading, setIsLoading]=useState(true)
    const [token, setToken]=useState('')
    const [admin, setAdmin]=useState(false)
    const auth = getAuth()
    

    // register user 

    const registerUser = (email, password,name, location, history)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email , password)
        .then(result=>{
            const user = {email , displayName:name}
            setUser(user);
            setError('')

            // update name in firebase 
            updateProfile(auth.currentUser,{
                displayName:name
            })

            // redirect url 

            history.push(location?.state?.from||'/')
           
        })
        .catch(error=>{
            setError(error.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    // login user 

    const loginUser = (email, password,location,history) =>{
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            history.push( location.state?.from || '/')
            setError('')

        })
        .catch(error=>{
            setError(error.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    // logOut user 

    const logOut =()=>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{

        })
        .catch(error=>{
            setError(error.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    // on auth state change 

    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
                getIdToken(user)
                .then(idToken=>{
                  setToken(idToken)
                })
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
    },[auth])

    // get admin 

    useEffect(()=>{

        fetch(`https://intense-sea-70523.herokuapp.com/admin/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setAdmin(data.admin)
        })
        
    },[user?.email])
    
    return{
        user,
        isLoading,
        error,
        token,
        admin,
        registerUser,
        loginUser,
        logOut
    }
}

export default useFirebase;