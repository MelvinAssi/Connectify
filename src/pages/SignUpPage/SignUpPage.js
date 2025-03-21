import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import { Link, useNavigate } from "react-router-dom";
import React,{useRef, useState,useContext} from "react";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {auth} from "../../firebase-config.js";
import { db } from "../../firebase-config.js"; 
import { doc, setDoc } from "firebase/firestore"; 
import { UserContext } from "../../contexts/userContext.js";

import "./SignUpPage.css";

function SignUpPage(){
    const {signUp} = useContext(UserContext);
    const formRef = useRef();
    const inputs = useRef([]);
    const navigate = useNavigate();

    const addInputs = el =>{
        if(el && !inputs.current.includes(el)){
           inputs.current.push(el); 
        }
    }
    const handleForm =  async (e) =>{
        e.preventDefault(); 
        if(inputs.current[5].value !== inputs.current[6].value){
            console.log("mot de passe diff")
            return;
        }

        try{
            const cred = await signUp(
                inputs.current[2].value,
                inputs.current[5].value
            );

            const user=cred.user;
            const userRef = doc(db, "users", user.uid); 
            const gender = inputs.current[3].checked ? "man" : inputs.current[4].checked ? "woman" : null;
            await setDoc(userRef, {
                name: inputs.current[0].value,
                firstname: inputs.current[1].value,
                gender: gender,
                email: inputs.current[2].value,
                createdAt: new Date()
            });

            formRef.current.reset();
            navigate("/profile");

        }catch (err){
            console.dir(err);
        }
     }

    return (
        <>       
             <Header></Header>
                       <main className="signup_main">
                           <div className="signup_image"></div>
                           <div className="signup-form-container">
                                   <h1>Inscription</h1>
                                   <form ref={formRef} onSubmit={handleForm} id="signup-form" method="POST" action="/signup">
                                        <div id="name_firstname">
                                            <div>
                                                <label htmlFor="name">Nom :</label>
                                                <input
                                                    ref={addInputs}
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Entrer votre nom..."
                                                    pattern="[a-zA-Z-]{2,}"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="firstname">Prénom :</label>
                                                <input
                                                    ref={addInputs}
                                                    type="text"
                                                    id="firstname"
                                                    name="firstname"
                                                    placeholder="Entrer votre prénom..."
                                                    pattern="[a-zA-Z-]{2,}"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="email">Email :</label>
                                            <input
                                                ref={addInputs}
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Entrer votre email..."
                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                required
                                                aria-label="Entrez votre adresse email"
                                            />
                                        </div>
                                        <div id="gender">
                                            <span>Genre :</span>
                                            <input  ref={addInputs} type="radio" id="man" name="genre" value="man" required />
                                            <label htmlFor="man">Homme</label>

                                            <input ref={addInputs} type="radio" id="woman" name="genre" value="woman" />
                                            <label htmlFor="woman">Femme</label>
                                        </div>
                                        <div>
                                            <label htmlFor="password">Mot de passe :</label>
                                            <input
                                                ref={addInputs}
                                                type="password"
                                                id="password"
                                                name="password"
                                                placeholder="Entrer votre mot de passe..."
                                                pattern="(?=.*\d)(?=.*[a-zA-Z]).{12,}"
                                                required
                                                aria-label="Entrez votre mot de passe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="password-confirm">Vérification de mot de passe :</label>
                                            <input
                                                ref={addInputs}
                                                type="password"
                                                id="password-confirm"
                                                name="password-confirm"
                                                placeholder="Confirmez votre mot de passe..."
                                                pattern="(?=.*\d)(?=.*[a-zA-Z]).{12,}"
                                                required
                                                aria-label="Confirmez votre mot de passe"
                                            />
                                        </div>
                                        <button type="submit" className="signup-button">Valider</button>
                                    </form>
                                   <p>Déjà Inscrit? <Link to="/login" className="signup-link">Connectez-vous</Link></p>
                               </div>
           
                       </main>                       
                       <Footer></Footer>          
        </>
    );
}
export default SignUpPage;