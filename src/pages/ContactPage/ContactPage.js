import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import ContactForm from "../../components/ContactForm/ContactForm.js";
import fdContact from "../../assets/images/fd_contact.jpg";
import './ContactPage.css'; 

function ContactPage() {
  return (
    <>
      <Header />
      <main className="contact_main">
        <div className="contact_image" style={{ backgroundImage: `url(${fdContact})` }} />
        <div className="contact_backgroundColor">
            <ContactForm/>
        </div>        
      </main>
      <Footer />
    </>
  );
}

export default ContactPage;