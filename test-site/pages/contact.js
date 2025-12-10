export default function Contact() {
  return (
    <div className="container">
      <header><h1>Contact</h1></header>

      <nav>
        <a href="/">Home</a>
        <a href="/articles">Articles</a>
        <a href="/contact">Contact</a>
        <a href="/newsletter">Newsletter</a>
      </nav>

      <h2>Send us a message</h2>
      <p>You can contact us by email or Instagram.</p>

      <form action="/api/contact" method="POST">
        <label>Name</label>
        <input type="text" name="name" required />

        <label>Email</label>
        <input type="email" name="email" required />

        <label>Message</label>
        <textarea name="message" rows="5" required></textarea>

        <input type="submit" value="Send" />
      </form>
    </div>
  )
}
