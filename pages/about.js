import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <h1 className="h1">About</h1>
      <p className="sub">
        Write 4–6 sentences: what you’re focused on, what you’ve built, what you want next.
      </p>

      <div className="section">
        <h3 style={{ marginBottom: 8 }}>Skills</h3>
        <div className="badge">TypeScript</div>
        <div className="badge">React</div>
        <div className="badge">Node.js</div>
        <div className="badge">SQL</div>
      </div>
    </Layout>
  );
}
