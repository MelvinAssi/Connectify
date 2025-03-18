import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.js";
import ContactForm from "../../components/ContactForm/ContactForm.js";

import "./HomePage.css";
import { Form } from "react-router-dom";

function HomePage() {
    return (
        <>
            <VideoPlayer />
            <Header />
            <main>
                {/* Section 0 */}
                <section id="section0">
                    <h1>Connectify</h1>
                </section>

                {/* Section 1 */}
                <section id="section1">
                    <h1>Bienvenue</h1>
                    <p>"Harmonisez vos passions, partagez vos émotions avec Connectify !"</p>
                </section>

                {/* Section 2 */}
                <section id="section2">
                    <div className="section_image"></div>
                    <div className="section_color">
                        <h1>Actualité</h1>
                        <p>Le lieu où vous pouvez vous connecter avec vos amis, partager des moments spéciaux et explorer de nouvelles rencontres.</p>
                        <p>Exprimez-vous à travers des photos, des vidéos et des messages, et découvrez le monde passionnant de la communauté Connectify.</p>
                        <p>Rejoignez-nous dès maintenant et commencez à créer des liens, à inspirer et à être inspiré. Connectify est là pour vous aider à rester connecté et à célébrer les moments de la vie, ensemble.</p>
                    </div>
                </section>

                {/* Section 3 */}
                <section id="section3">
                    <div className="section_color">
                        <h1>Qui sommes nous ?</h1>
                        <p>Chez Connectify, nous sommes une plateforme sociale dynamique et inclusive, dédiée à connecter les individus du monde entier.</p>
                        <p>Notre objectif est de créer un espace numérique où chacun peut se sentir libre d'exprimer sa véritable identité, de partager ses passions et de tisser des liens authentiques.</p>
                        <p>Rejoignez-nous dès maintenant et commencez à créer des liens, à inspirer et à être inspiré. Connectify est là pour vous aider à rester connecté et à célébrer les moments de la vie, ensemble.</p>
                    </div>
                    <div className="section_image"></div>
                </section>

                {/* Section 4 */}
                <section id="section4">
                    <div className="section_image"></div>
                    <div className="section_color">
                        <ContactForm />
                    </div>
                </section>

                {/* Section 5 */}
                <section id="section5">
                    <div className="newsletter_container">
                        <h1>Newsletter</h1>
                        <p>Inscrivez-vous à notre newsletter pour rester informé(e) et connecté(e) avec Connectify !</p>
                        <form id="newsletter_form"> 
                            <div>
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
                            <button type="submit" className="newsletter_button">Valider</button>
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default HomePage;
