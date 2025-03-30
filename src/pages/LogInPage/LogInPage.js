import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useRef } from "react";
import { UserContext } from "../../contexts/userContext.js";
import "./LogInPage.css";

function LoginPage() {
    const { logIn } = useContext(UserContext);
    const formRef = useRef();
    const inputs = useRef([]);
    const navigate = useNavigate();

    const addInputs = (el) => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el);
        }
    };

    const handleForm = async (e) => {
        e.preventDefault();

        // Vérifier la validité du formulaire avant de continuer
        if (!formRef.current.checkValidity()) {
            formRef.current.reportValidity(); // Affiche les messages d'erreur natifs du navigateur
            return;
        }

        try {
            const cred = await logIn(
                inputs.current[0].value, // email
                inputs.current[1].value  // password
            );

            formRef.current.reset();
            
            navigate("/profile");
        } catch (error) {
            console.error("Erreur de connexion:", error);
            let errorMessage = "Erreur lors de la connexion";
            switch (error.code) {
                case "auth/invalid-credential":
                    errorMessage = "Email ou mot de passe incorrect";
                    break;
                case "auth/user-not-found":
                    errorMessage = "Utilisateur non trouvé";
                    break;
                case "auth/wrong-password":
                    errorMessage = "Mot de passe incorrect";
                    break;
                case "auth/invalid-email":
                    errorMessage = "Email invalide";
                    break;
                case "auth/too-many-requests":
                    errorMessage = "Trop de tentatives, veuillez réessayer plus tard";
                    break;
                default:
                    errorMessage = "Une erreur est survenue : " + error.message;
            }
            alert(errorMessage); // Afficher un message clair pour les erreurs Firebase
        }
    };

    return (
        <>
            <main className="login_main">
                <div className="login_image"></div>
                <div className="login-form-container">
                    <h1>Connexion</h1>
                    <form id="login-form" ref={formRef} onSubmit={handleForm} noValidate={false}>
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

                        <div>
                            <label htmlFor="password">Mot de passe :</label>
                            <input
                                ref={addInputs}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Entrer votre mot de passe..."
                                required
                                aria-label="Entrez votre mot de passe"
                            />
                        </div>

                        <button type="submit" className="login-button">Se Connecter</button>
                    </form>
                    <p>
                        Pas de compte ? <Link to="/signup" className="signup-link">Inscrivez-vous</Link>
                    </p>
                </div>
            </main>
        </>
    );
}

export default LoginPage;