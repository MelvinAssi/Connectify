import { createContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebase-config.js";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const UserContext = createContext();

export function UserContextProvider(props) {
    const signUp = async (email, pwd, informations) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, pwd);
            const user = userCredential.user;
            const userRef = doc(db, "users", user.uid);
            await setDoc(userRef, informations);
            return user;
        } catch (error) {
            throw new Error(error.message || "Erreur lors de la création du compte");
        }
    };

    const logIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd);
    const logOut = () => signOut(auth);

    const fetchUserData = async (uid) => {
        try {
            const userRef = doc(db, "users", uid);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
                return userSnap.data();
            }
            throw new Error("Aucune donnée utilisateur trouvée");
        } catch (error) {
            console.error("Erreur lors de la récupération des données:", error);
            return null;
        }
    };

    const setUserData = async (uid, type, data) => {
        try {
            const userRef = doc(db, "users", uid);
            const userSnap = await getDoc(userRef);
            let userData = userSnap.exists() ? userSnap.data() : {};
            if (!userData[type]) {
                userData[type] = [];
            }
            userData[type].push(data);
            await setDoc(userRef, userData, { merge: true });
    
        } catch (error) {
            console.error("Erreur lors de la mise à jour des données utilisateur:", error);
        }
    };
    const getUserData = async (uid, type) => {
        try {
            const userRef = doc(db, "users", uid);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
                const userData = userSnap.data();
                if (userData[type]) {
                    return userData[type];
                } else {
                    throw new Error(`Aucune donnée trouvée pour le type: ${type}`);
                }
            } else {
                throw new Error("Utilisateur non trouvé");
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des données utilisateur:", error);
            return null;
        }
    };

    const [currentUser, setCurrentUser] = useState(null);
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            try {
                if (user) {
                    const userData = await fetchUserData(user.uid);
                    setCurrentUser({ ...user, ...userData });
                } else {
                    setCurrentUser(null);
                }
            } catch (error) {
                console.error("Erreur dans onAuthStateChanged:", error);
                setCurrentUser(null);
            } finally {
                setLoadingData(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{ signUp, currentUser, logIn, logOut, fetchUserData, loadingData ,setUserData,getUserData}}>
            {!loadingData && props.children}
        </UserContext.Provider>
    );
}