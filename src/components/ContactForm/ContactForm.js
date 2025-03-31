import "./ContactForm.css"
import React, {  useRef } from "react";


function ContactForm() {
    
    const inputs = useRef([]);
    const formRef = useRef();
    const addInputs = (el) => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el);
        }
    };

    const handleForm = async (e) => {
        e.preventDefault();
        const string = "\n" + inputs.current[0].value + "\n" + inputs.current[1].value + "\n" + inputs.current[2].value;
        formRef.current.reset();
        alert("Votre demande a été prise en compte."+string);

    };
    return (
        <>
        <div className="contact-form-container">
            <h1>Nous Contactez</h1>
            <form id="contact-form" ref={formRef} onSubmit={handleForm}>
                <div>
                    <label htmlFor="email">Email</label>
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
                    <label htmlFor="subject">Sujet</label>
                    <input
                        ref={addInputs}
                        type="text"
                        placeholder="Sujet de votre message.."
                        id="subject"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        ref={addInputs}
                        placeholder="Ecrivez votre message.."
                        name="message"
                        rows="5"
                        id="message"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="send-button">Valider</button>
            </form>
        </div>
            
        </>
    );
}

export default ContactForm;
