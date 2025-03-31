import React, {  useRef } from "react";
import "./Newsletter.css"



function Newsletter(){
    const inputs = useRef([]);
        const formRef = useRef();
        const addInputs = (el) => {
            if (el && !inputs.current.includes(el)) {
                inputs.current.push(el);
            }
        };
    
        const handleForm = async (e) => {
            e.preventDefault();
            const string =  inputs.current[0].value + "\n" ;
            formRef.current.reset();
            alert(string+" Vous êts maintenant abonné à notre Newletters");
    
        };
    return(
        <>
            <div className="newsletter_container">
                <h1>Newsletter</h1>
                <p>Inscrivez-vous à notre newsletter pour rester informé(e) et connecté(e) avec Connectify !</p>
                <form id="newsletter_form" ref={formRef} onSubmit={handleForm}>
                    <div>
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
                    <button type="submit" className="newsletter_button">Valider</button>
                </form>
          </div>        
        </>
    )
}
export default Newsletter;