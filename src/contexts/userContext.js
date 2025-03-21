import { createContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged ,signOut} from "firebase/auth";
import {auth,db} from "../firebase-config.js";
import { doc, setDoc } from "firebase/firestore"; 

export const UserContext = createContext()
export function UserContextProvider(props){
    const signUp = (email,pwd) => createUserWithEmailAndPassword(auth,email,pwd);
    const logIn = (email,pwd) => signInWithEmailAndPassword(auth,email,pwd);
    const logOut = () =>  signOut(auth);

    const [currentUser, setCurrentUser]=useState();
    const [loadingData, setLoadingData]=useState(true);

    useEffect(() => {
        const unsubcribe =onAuthStateChanged(auth,(currentUser) =>{
            setCurrentUser(currentUser)
            setLoadingData(false)
        })
        return unsubcribe;
    },[])

    return (
        <UserContext.Provider value={{signUp,currentUser,logIn,logOut}}>
            {!loadingData && props.children}
        </UserContext.Provider>
    )
}