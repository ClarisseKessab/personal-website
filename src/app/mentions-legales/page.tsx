import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mentions Légales | Clarisse K",
  description: "Mentions légales du site de Clarisse Kessab, freelance en développement front-end et intégration web. Informations légales, éditeur, hébergement et politique de confidentialité.",
};

export default function MentionsLegales() {
  return (
    <>
        <div className="blur blur-medium blur-violet" style={{ top: '100px', right: '100px' }} />
    <div className="blur blur-small blur-green" style={{ top: '300px', right: '400px' }} />

    <section className="mentions-legales">
      <div className="mentions-container">
        <h1>Mentions légales</h1>

        <p>
          Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004
          pour la Confiance dans l’économie numérique, il est précisé aux utilisateurs du site
          l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
        </p>

        <h2>1. Éditeur du site</h2>
        <p>
          <strong>Nom :</strong> Clarisse Kessab<br />
          <strong>Email :</strong>{" "}
          <a href="mailto:clarisse.kessab@gmail.com">clarisse.kessab@gmail.com</a><br />
          <strong>SIRET :</strong> 898 085 063 00011<br />
          <strong>Adresse :</strong> Grandchamp-des-Fontaines, 44119<br />
          <strong>Responsable de la publication :</strong> Clarisse Kessab<br />
          <strong>Déléguée à la protection des données :</strong>{" "}
          Clarisse Kessab –{" "}
          <a href="mailto:clarisse.kessab@gmail.com">clarisse.kessab@gmail.com</a>
        </p>

        <h2>2. Hébergeur</h2>
        <p>
          <strong>Nom :</strong> Vercel Inc.<br />
          <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, USA<br />
          <strong>Site web :</strong>{" "}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
            https://vercel.com
          </a>
        </p>

        <h2>3. Propriété intellectuelle</h2>
        <p>
          Tous les contenus présents sur ce site (textes, images, illustrations, logo, etc.) sont,
          sauf mention contraire, la propriété exclusive de Clarisse Kessab. Toute reproduction,
          distribution, modification, adaptation, retransmission ou publication, même partielle,
          est strictement interdite sans l&apos;accord écrit de l&apos;auteur.
        </p>

        <h2>4. Données personnelles</h2>
        <p>
          Ce site peut collecter des données personnelles via son formulaire de contact. Ces données
          sont uniquement utilisées pour répondre aux demandes des utilisateurs. Conformément à la loi
          « Informatique et Libertés » du 6 janvier 1978 modifiée, vous disposez d’un droit d’accès,
          de rectification et de suppression des données vous concernant. Pour exercer ce droit,
          veuillez envoyer un email à :{" "}
          <a href="mailto:clarisse.kessab@gmail.com">clarisse.kessab@gmail.com</a>
        </p>

        <h2>5. Cookies</h2>
        <p>
          Le site peut utiliser des cookies pour améliorer l’expérience de navigation. L&apos;utilisateur
          peut configurer son navigateur pour refuser les cookies.
        </p>

        <h2>6. Responsabilité</h2>
        <p>
          L’éditeur du site ne saurait être tenu pour responsable de dommages directs ou indirects
          causés au matériel de l’utilisateur lors de l’accès au site, ni des erreurs ou omissions
          présentes dans les contenus.
        </p>

        <h2>7. Droit applicable</h2>
        <p>
          Tout litige en relation avec l’utilisation du site est soumis au droit français. En cas de
          litige, compétence est attribuée aux tribunaux compétents de Paris.
        </p>

        <p className="last-update">Dernière mise à jour : 09/04/2025</p>
      </div>
    </section>
    </>
  );
}
