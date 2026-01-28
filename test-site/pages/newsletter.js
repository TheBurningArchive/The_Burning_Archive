export default function Newsletter() {
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

      <main className="page-content">
        <h2 className="page-title">NEWSLETTER</h2>
        <p className="page-text">
          Subscribe to receive updates from The Burning Archive.
        </p>
      </main>
    </>
  );
}
