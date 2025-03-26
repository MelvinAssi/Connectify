import ContactForm from "../../components/ContactForm/ContactForm.js";
import fdContact from "../../assets/images/fd_contact.jpg";
import './ContactPage.css'; 

function ContactPage() {
  return (
    <>
      <main className="contact_main">
        <div className="contact_image" style={{ backgroundImage: `url(${fdContact})` }} />
        <div className="contact_backgroundColor">
            <ContactForm/>
        </div>        
      </main>
    </>
  );
}

export default ContactPage;