import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaMailBulk} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-right">
        <p>© 2025 — Fait avec ❤️ par Clarisse —</p>
        <div className="footer-socials">
          <a href="mailto:clarisse.kessab@gmail.com" target="_blank" rel="noopener noreferrer"><FaMailBulk /></a>
          <a href="https://www.linkedin.com/in/clarisse-k-a9420a199/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/ClarisseKessab" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.instagram.com/clariste_flow/?hl=fr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://wa.me/0783058586" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
      </div>
        <div className="footer-links">
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/politique-confidentialite">Politique de confidentialité</Link>
        </div>
        </div>
    </footer>
  );
}
