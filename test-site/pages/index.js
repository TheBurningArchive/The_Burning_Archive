// dati di esempio per gli articoli
const articles = [
  { title: "Article One", slug: "article-one", excerpt: "This is a short summary of article one." },
  { title: "Article Two", slug: "article-two", excerpt: "This is a short summary of article two." },
  { title: "Article Three", slug: "article-three", excerpt: "This is a short summary of article three." },
  { title: "Article Four", slug: "article-four", excerpt: "This is a short summary of article four." },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <img src="/logo.png" alt="The Burning Archive" className="logo" />
          <nav className="nav">
            <a href="/articles">Articles</a>
            <a href="/newsletter">Newsletter</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <h1 className="hero-title">The Burning Archive</h1>
        <p className="hero-subtitle">
          A living archive of texts, images and cultural fragments.
        </p>

        <section className="articles-grid">
          {articles.map((article) => (
            <a href={`/articles/${article.slug}`} key={article.slug} className="article-card">
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
            </a>
          ))}
        </section>
      </main>
    </>
  );
}
