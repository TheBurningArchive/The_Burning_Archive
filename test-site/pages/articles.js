// pages/articles.js
export default function Articles() {
  return (
    <div>
      <header>
        <h1>Articles</h1>
      </header>

      <nav>
        <a href="/">Home</a>
        <a href="/articles">Articles</a>
        <a href="/">Contact</a>
        <a href="/newsletter">Newsletter</a>
      </nav>

      <div className="container">
        <h2>Latest Article</h2>
        <div className="article">
          <h3>Title of the First Article</h3>
          <p>
            This is a sample text. Replace it with your real article content.
          </p>
        </div>
      </div>
    </div>
  )
}
