import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="container">
      <nav className="nav">
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/contact">CONTACT</Link>
      </nav>
      {children}
      <footer className="footer">© {new Date().getFullYear()} Sam Shulman</footer>
    </div>
  );
}
