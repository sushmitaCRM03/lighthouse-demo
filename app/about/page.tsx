import Link from "next/link";
import styles from "./about.module.css";

export const metadata = {
  title: "About | Lighthouse Demo",
  description: "Learn about our mission and the team behind Lighthouse Demo.",
};

export default function About() {
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
        <h2>About Us</h2>
        <p>
          We are a small team passionate about web performance and accessibility.
          This demo site showcases how Lighthouse CI can be integrated into a
          Next.js project to automatically measure and enforce quality standards.
        </p>

        <h3>Our Mission</h3>
        <p>
          Every user deserves a fast, accessible, and secure web experience.
          By running Lighthouse audits on every pull request, we catch
          regressions before they reach production.
        </p>

        <h3>What We Track</h3>
        <ul>
          <li><strong>Performance</strong> — Page speed, time to interactive, CLS</li>
          <li><strong>Accessibility</strong> — ARIA, contrast ratios, keyboard navigation</li>
          <li><strong>Best Practices</strong> — HTTPS, modern APIs, no console errors</li>
          <li><strong>SEO</strong> — Meta tags, crawlability, structured data</li>
        </ul>

        <Link href="/contact" className={styles.ctaButton}>Get in Touch</Link>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Lighthouse Demo. Built with Next.js.</p>
      </footer>
    </div>
  );
}
