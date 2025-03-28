import React,{useEffect,useState} from "react";
import { useNavigate } from 'react-router-dom'
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.js";
import "./HomePage.css";


import fdActualite1 from "../../assets/images/fd_actualite1.png";
import fdActualite2 from "../../assets/images/fd_actualite2.png";
import fdQsn from "../../assets/images/fd_qsn.jpg";
import fdContact from "../../assets/images/fd_contact.jpg";
import WelcomeImage from "../../assets/images/Pexels_Photo_by_Pixabay.png";


import TitleAnimation from "../../components/TitleAnimation/TitleAnimation.js";
import Carousel from "../../components/Carousel/Carousel.js";

function HomePage() {

  const translations = [
    "Bienvenue",     // Français
    "Welcome",       // Anglais
    "Bienvenido",    // Espagnol
    "Willkommen",    // Allemand
    "Byenvini",      // Créole haïtien
    "مرحباً",        // Arabe
    "いらっしゃいませ", // Japonais
    "Anṣuf yis-wen", // Berbère (Kabyle)
    "Дякую",         // Ukrainien
    "স্বাগত",         // Bengali
    "欢迎光临",        // Chinois
  ];  

  const [currentTranslation, setCurrentTranslation] = useState(translations[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % translations.length;
        setCurrentTranslation(translations[nextIndex]);
        return nextIndex;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const navigate = useNavigate();
  const handleClick = (page) => navigate(page);

  return (    <>
      
      
      <main>
        {/* Section 0 */}
        <section id="section0">
          <VideoPlayer/> 
          <TitleAnimation text="Connectify"/>         
        </section>

        {/* Section 1 */}
        <section id="section1" style={{backgroundImage:`url(${WelcomeImage})`}}>       
            <h1>{currentTranslation}</h1>
            <p>Rejoignez-nous dès maintenant et commencez à créer des liens, à inspirer et à être inspiré. Connectify est là pour vous aider à rester connecté et à célébrer les moments de la vie, ensemble.</p> 
        </section>
                {/* Section 2 */}
        <section id="section2">
          <div className="section_image" style={{ backgroundImage: `url(${fdQsn})` }} />
          <div className="section_color">
            <h1>Qui sommes nous ?</h1>
            <p>Chez Connectify, nous sommes une plateforme sociale dynamique et inclusive, dédiée à connecter les individus du monde entier.</p>
            <p>Notre objectif est de créer un espace numérique où chacun peut se sentir libre d'exprimer sa véritable identité, de partager ses passions et de tisser des liens authentiques.</p>
            <p>Rejoignez-nous dès maintenant et commencez à créer des liens, à inspirer et à être inspiré. Connectify est là pour vous aider à rester connecté et à célébrer les moments de la vie, ensemble.</p>
          </div>          
        </section>

        {/* Section 3 */}
        <section id="section3">
          <div className="section_image" id="1" style={{ backgroundImage: `url(${fdActualite1})` }}>
            <p>Le lieu où vous pouvez vous connecter avec vos amis, partager des moments spéciaux et explorer de nouvelles rencontres.</p>
          </div>
          <div className="section_image" id="2" style={{ backgroundImage: `url(${fdActualite2})` }}>
              <p>Exprimez-vous à travers des photos, des vidéos et des messages, et découvrez le monde passionnant de la communauté Connectify.</p>      
          </div>
        </section>

        {/* Section 4 */}
        <section id="section4">
          <h1>Actualités</h1>
          <Carousel/>
        </section>

        {/* Section 5 */}
        <section id="section5">
          <div className="section_color">
              <h1>Nous contacter</h1>
              <p>Chez Connectify, nous sommes une plateforme sociale dynamique et inclusive, dédiée à connecter les individus du monde entier.</p>
              <button onClick={() => handleClick("/contact")}>Parcourir</button>
          </div>
          <div className="section_image" style={{ backgroundImage: `url(${fdContact})` }} />

        </section>
      </main>
      
    </>
  );
}

export default HomePage;