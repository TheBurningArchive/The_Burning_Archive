// pages/contact.js
export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <form action="/api/contact" method="POST">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
