// pages/newsletter.js
export default function Newsletter() {
  return (
    <div>
      <header>
        <h1>Newsletter</h1>
      </header>

      <nav>
        <a href="/">Home</a>
        <a href="/articles">Articles</a>
        <a href="/">Contact</a>
        <a href="/newsletter">Newsletter</a>
      </nav>

      <div className="container">
        <h2>Subscribe to the Newsletter</h2>
        <p>Receive monthly updates on new articles.</p>

        <form action="https://formspree.io/f/yourformid" method="POST">
          <label>Email</label>
          <input type="email" name="email" required />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
    </div>
  )
}
