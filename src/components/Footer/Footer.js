import "./Footer.css"
import Newsletter from "../Newsletter/Newsletter"

export default function Footer(){
   return(
      <footer>
         <div className="footerContainer">
            <h1>Connectify</h1>
            <Newsletter/>
         </div>
         
         <p>© 2025 Connectify. Tous Droits Réservés.</p>
      </footer>
 )
}