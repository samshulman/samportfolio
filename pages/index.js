import Layout from "../components/Layout.js";

export default function Home() {
  return (
    <Layout>
      <div className="hero-section">
        <div className="gradient-accent gradient-accent-top-right"></div>
        <h1 className="h1">
          Sam<br />
          Shulman
        </h1>
        <p className="sub">
          Software Engineer at Clay. I build useful, scalable, and reliable products.
        </p>
      </div>
    </Layout>
  );
}
