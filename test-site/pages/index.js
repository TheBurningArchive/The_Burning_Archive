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
          <a
  href="https://www.instagram.com/the_burning.archive/"
  target="_blank"
  rel="noreferrer"
>
  INSTAGRAM
</a>
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
    </>
  );
}
