import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import { Link } from "react-router-dom";
import "./SignUpPage.css"

function SignUpPage(){
    return (
        <>       
             <Header></Header>
                       <main className="signup_main">
                           <div className="signup_image"></div>
                           <div className="signup-form-container">
                                   <h1>Inscription</h1>
                                   <form id="signup-form" method="POST" action="/signup">
                                        <div>
                                            <div>
                                                <label htmlFor="name">Nom :</label>
                                                <input
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
                                            <span>Genre :</span>
                                            <input type="radio" id="man" name="genre" value="man" required />
                                            <label htmlFor="man">Homme</label>

                                            <input type="radio" id="woman" name="genre" value="woman" />
                                            <label htmlFor="woman">Femme</label>
                                        </div>
                                        <div>
                                            <label htmlFor="password">Mot de passe :</label>
                                            <input
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
                                   <p>Déjà Inscrit? <Link to="/login" className="login-link">Connectez-vous</Link></p>
                               </div>
           
                       </main>                       
                       <Footer></Footer>          
        </>
    );
}
export default SignUpPage;