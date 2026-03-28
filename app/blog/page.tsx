import Link from "next/link";
import styles from "./blog.module.css";

export const metadata = {
  title: "Blog | Lighthouse Demo",
  description: "Articles and updates about web performance and Lighthouse CI.",
};

const posts = [
  {
    slug: "why-lighthouse-ci",
    title: "Why Lighthouse CI Belongs in Every CI/CD Pipeline",
    date: "2025-03-10",
    excerpt:
      "Performance regressions are subtle and easy to miss in code review. Lighthouse CI automates the audit so you never ship a slow page again.",
  },
  {
    slug: "core-web-vitals",
    title: "Understanding Core Web Vitals",
    date: "2025-02-22",
    excerpt:
      "LCP, FID, and CLS — what they measure, why they matter for SEO, and practical tips to keep them green.",
  },
  {
    slug: "nextjs-image-optimisation",
    title: "Next.js Image Optimisation in Practice",
    date: "2025-01-15",
    excerpt:
      "The next/image component does a lot for you, but knowing what it does and when to customise it unlocks even bigger gains.",
  },
];

export default function Blog() {
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
        <h2>Blog</h2>
        <p className={styles.intro}>
          Thoughts on web performance, accessibility, and continuous quality.
        </p>

        <ul className={styles.postList}>
          {posts.map((post) => (
            <li key={post.slug} className={styles.postCard}>
              <time className={styles.date}>{post.date}</time>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.excerpt}>{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Lighthouse Demo. Built with Next.js.</p>
      </footer>
    </div>
  );
}
