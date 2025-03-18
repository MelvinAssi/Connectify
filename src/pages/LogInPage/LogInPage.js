import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import { Link } from "react-router-dom";
import "./LogInPage.css"

function LoginPage(){
    return (
        <>       
            <Header></Header>
            <main className="login_main">
                <div className="login_image"></div>
                <div className="login-form-container">
                        <h1>Connexion</h1>
                        <form id="login-form">
                            <div>
                                <label htmlFor="email">Email :</label>
                                <input
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
            
            <Footer></Footer>        
        </>
    );
}
export default LoginPage;