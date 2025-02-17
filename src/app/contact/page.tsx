import ContactFormComponent from '@/components/ContactForm';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaInstagram  } from "react-icons/fa";


export default function ContactPage() {
  return (
    <>
      <div className="contact">
        <div className="texts-contact">
          <h1 className="h1-title text-white contact-title">Restons en contact</h1>
          <div className="p-group-contact">
          <p className="p-contact">Une question, une opportunité ou simplement envie d’échanger ?</p><p className="p-contact">Remplissez le formulaire ci-dessous et je reviendrais vers vous rapidement.</p><p className="p-contact"> J&apos;ai hâte de vous lire ! 🚀</p>
          </div>
        </div>
        <div className="content-contact">
            <ContactFormComponent />
          </div>

      </div>
    </>
  );
}
