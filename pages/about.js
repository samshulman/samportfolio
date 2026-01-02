import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <h1 className="h1">About</h1>
      <p className="sub">
        I enjoy the outdoors, music, and spending time with friends and family.
      </p>

      <div className="section">
        <h3 style={{ marginBottom: 8 }}>Skills & Interests</h3>
        <div className="badge">Software Engineering</div>
        <div className="badge">AI Research</div>
        <div className="badge">Leadership</div>
        <div className="badge">Entrepreneurship</div>
      </div>
    </Layout>
  );
}
