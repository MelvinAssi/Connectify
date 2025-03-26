import { createContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged ,signOut} from "firebase/auth";
import {auth,db} from "../firebase-config.js";
import { doc, setDoc, getDoc } from "firebase/firestore"; 

export const UserContext = createContext()
export function UserContextProvider(props){
    const signUp = async (email,pwd,informations) =>{
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, pwd);
            const user = userCredential.user;
            const userRef = doc(db, "users", user.uid);
            await setDoc(userRef, {informations});
            return user;
          } catch 
          {

          }
    } 
    const logIn = (email,pwd) => signInWithEmailAndPassword(auth,email,pwd);
    const logOut = () =>  signOut(auth);

    const fetchUserData = async (uid) => {
        const userRef = doc(db, "users", uid); 
        const userSnap = await getDoc(userRef);
        return userSnap.data();
    }
 

    const [currentUser, setCurrentUser]=useState();
    const [loadingData, setLoadingData]=useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            const userData = await fetchUserData(user.uid);
            setCurrentUser({ ...user, ...userData });
          } else {
            setCurrentUser(null);
          }
          setLoadingData(false);
        });
    
        return () => unsubscribe();
      }, []);

    return (
        <UserContext.Provider value={{signUp,currentUser,logIn,logOut,fetchUserData}}>
            {!loadingData && props.children}
        </UserContext.Provider>
    )
}