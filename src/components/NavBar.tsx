import Link from "next/link";

export default function Home() {
  return (
  <nav>
    <div>
      <img src="" alt="" />
    </div>
    <div>
      <Link href="/" className="">Accueil</Link>
      <Link href="/" className="">À propos</Link>
      <Link href="/" className="">Projets</Link>
      <Link href="/" className="">Contact</Link>
    </div>
  </nav>
  );
}
