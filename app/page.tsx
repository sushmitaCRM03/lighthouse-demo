import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Lighthouse Demo Site</h1>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>Welcome to our Demo Website</h2>
          <p>
            This site is built with Next.js and configured with Lighthouse CI
            to automatically audit performance, accessibility, best practices,
            and SEO on every push.
          </p>
          <Link href="/about" className={styles.ctaButton}>
            Learn More
          </Link>
        </section>

        <section className={styles.features}>
          <div className={styles.card}>
            <h3>⚡ Performance</h3>
            <p>Optimised images, lazy loading, and minimal JavaScript for a blazing-fast experience.</p>
          </div>
          <div className={styles.card}>
            <h3>♿ Accessibility</h3>
            <p>Semantic HTML, proper ARIA labels, and high-contrast colour ratios out of the box.</p>
          </div>
          <div className={styles.card}>
            <h3>🔍 SEO Ready</h3>
            <p>Meta tags, structured data, and server-side rendering for great search rankings.</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Lighthouse Demo. Built with Next.js.</p>
      </footer>
    </div>
  );
}
