import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="container">
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      {children}
      <div className="footer">© {new Date().getFullYear()} Sam Shulman</div>
    </div>
  );
}
