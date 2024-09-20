import Banner from "./components/Contacts/Banner";
import ContactForm from "./components/Contacts/ContactForm";
import { Link } from "react-router-dom"; // import Link จาก react-router-dom

function Contact() {
  return (
    <div>
      <section className="flex justify-center">
        <div className="h-[200px] w-[200px] hover:scale-110 transition-all duration-300 mt-4">
          <Link to="/">
            <img
              src="/Logo.png"
              alt="Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </Link>
        </div>
      </section>
      <section>
        <Banner />
      </section>
      <section>
        <ContactForm />
      </section>
    </div>
  );
}

export default Contact;
