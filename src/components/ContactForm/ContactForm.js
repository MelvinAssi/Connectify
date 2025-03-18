import "./ContactForm.css"
import Button from "../Button/Button.js"

function ContactForm() {
    return (
        <>
        <div className="contact-form-container">
            <h1>Nous Contactez</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor="email">Email</label>
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
                    <label htmlFor="subject">Sujet</label>
                    <input
                        type="text"
                        placeholder="Sujet de votre message.."
                        id="subject"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
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
