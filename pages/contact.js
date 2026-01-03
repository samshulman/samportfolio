import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <h1 className="h1">Contact</h1>
      <div className="gradient-accent gradient-accent-bottom-right"></div>
      <p className="sub">
        Email me at <a href="mailto:shulman.samantha@gmail.com">shulman.samantha@gmail.com</a>.
      </p>
      <div className="section">
        <p>
          <a href="https://www.linkedin.com/in/samantha-shulman-16b352187/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {" · "}
          <a href="https://github.com/samshulman" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </div>
    </Layout>
  );
}
