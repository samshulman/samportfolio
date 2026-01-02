import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <h1 className="h1">Contact</h1>
      <p className="sub">
        Email me at <a href="mailto:you@example.com">you@example.com</a>.
      </p>
      <div className="section">
        <a href="https://www.linkedin.com/in/YOUR_LINKEDIN" target="_blank">LinkedIn</a>{" · "}
        <a href="https://github.com/YOUR_GITHUB" target="_blank">GitHub</a>
      </div>
    </Layout>
  );
}
