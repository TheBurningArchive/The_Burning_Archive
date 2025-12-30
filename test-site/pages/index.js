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
  <div className="title-row">
    <img src="/logo.png" alt="Logo" className="logo" />
    <h1 className="site-title">THE BURNING ARCHIVE</h1>
  </div>

  <div className="divider"></div>

  <nav className="site-nav">
    <a href="/about">ABOUT US</a>
    <a href="/writings">WRITINGS</a>
    <a href="/newsletter">NEWSLETTER</a>
    <a href="https://instagram.com" target="_blank">INSTAGRAM</a>
  </nav>
</header>
<section className="latest-section">
  <p className="latest-title">latest writings</p>

  <div className="cards">
    <div className="card">
      <img src="/img1.jpg" alt="Article 1" />
    </div>
    <div className="card">
      <img src="/img2.jpg" alt="Article 2" />
    </div>
    <div className="card">
      <img src="/img3.jpg" alt="Article 3" />
    </div>
  </div>
</section>
  