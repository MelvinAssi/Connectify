import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useRef } from "react";
import { UserContext } from "../../contexts/userContext.js";
import "./LogInPage.css";

function LoginPage(){

    const {logIn} = useContext(UserContext);
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

        try{
            const cred = await logIn(
                inputs.current[0].value,
                inputs.current[1].value
            );

            formRef.current.reset();
            navigate("/profile");

        }catch (err){
            console.dir(err);
        }
     }


    
    return (
        <>
            <main className="login_main">
                <div className="login_image"></div>
                <div className="login-form-container">
                        <h1>Connexion</h1>
                        <form id="login-form" ref={formRef} onSubmit={handleForm}>
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
                                    aria-label="Enter your email address"
                                />
                            </div>

                            <div>
                                <label htmlFor="password">Mot de passe :</label>
                                <input
                                    ref={addInputs}
                                    type="password"
                                    placeholder="Entrer votre mot de passe.."
                                    id="password"
                                    required
                                />
                            </div>

                            <button type="submit" className="login-button">Se Connecter</button>
                        </form>
                        <p>Pas de compte ? <Link to="/signup" className="signup-link">Inscrivez-vous</Link></p>
                    </div>

            </main>    
        </>
    );
}
export default LoginPage;