import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <h1 className="h1">Contact</h1>
      <p className="sub">
        Email me at <a href="shulman.samantha@gmail.com">shulman.samantha@gmail.com</a>.
      </p>
      <div className="section">
        <a href="https://www.linkedin.com/in/samantha-shulman-16b352187/" target="_blank">LinkedIn</a>{" · "}
        <a href="https://github.com/samshulman" target="_blank">GitHub</a>
      </div>
    </Layout>
  );
}
