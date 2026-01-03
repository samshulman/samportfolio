import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <h1 className="h1">About</h1>
      <p className="sub">
        I enjoy the outdoors, music, and spending time with friends and family.
      </p>
      <div className="gradient-accent gradient-accent-bottom-left"></div>

      <div className="section">
        <h3>Skills & Interests</h3>
        <div>
          <span className="badge">Software Engineering</span>
          <span className="badge">AI Research</span>
          <span className="badge">Leadership</span>
          <span className="badge">Entrepreneurship</span>
        </div>
      </div>
    </Layout>
  );
}
