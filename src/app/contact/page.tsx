import ContactFormComponent from '@/components/ContactForm';


import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact | Clarisse Dev",
  description: "Une question, une opportunité ou juste envie d’échanger ? Contactez-moi facilement via ce formulaire.",
};

export default function ContactPage() {
  return (
    <>

    <div className="blur blur-big blur-blue" style={{ top: '500px', left: '0' }} />
    <section className="section-contact">
      <div className="container-contact">
        <div className="intro-contact">
          <h1 className="contact-title">Discutons ensemble de votre projet 💬</h1>
          <p>
            Vous avez une idée en tête, un site à créer, ou simplement une question sur mes services ? Je serais ravie de vous accompagner !
          </p>
          <p>
            Je conçois des sites web modernes, accessibles et optimisés pour les moteurs de recherche. Que ce soit pour une refonte, une création de site vitrine ou un accompagnement technique, je suis là pour vous aider à concrétiser votre vision.
          </p>
          <p>
            Remplissez le formulaire ci-dessous — je vous répondrai rapidement. Et si vous préférez échanger autour d’un café virtuel ☕, indiquez-le dans votre message !
          </p>
        </div>

        <div className="contact-form-wrapper">
          <ContactFormComponent />
        </div>
      </div>
    </section>
    <div className="blur blur-medium blur-violet" style={{ top: '100px', right: '100px' }} />
    <div className="blur blur-small blur-green" style={{ top: '300px', right: '400px' }} />
    </>
  );
}
