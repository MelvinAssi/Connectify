import React from "react";
import "./Newsletter.css"


function Newsletter(){
    return(
        <>
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
        </>
    )
}
export default Newsletter;