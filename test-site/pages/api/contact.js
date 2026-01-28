export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body
    console.log('Contact form submitted:', name, email, message)
    // Qui puoi usare un servizio tipo Formspree o inviare direttamente email
    res.status(200).json({ message: 'Message received' })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
