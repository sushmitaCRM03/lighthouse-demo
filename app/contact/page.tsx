import Link from "next/link";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact | Lighthouse Demo",
  description: "Get in touch with the Lighthouse Demo team.",
};

export default function Contact() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Lighthouse Demo</h1>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <h2>Contact Us</h2>
        <p>Have a question or want to collaborate? Fill in the form below.</p>

        <form className={styles.form} aria-label="Contact form">
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your name" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} placeholder="How can we help?" required />
          </div>

          <button type="submit" className={styles.submitBtn}>Send Message</button>
        </form>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Lighthouse Demo. Built with Next.js.</p>
      </footer>
    </div>
  );
}
