export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body
    // Qui si può collegare un servizio tipo Mailchimp o Formspree
    console.log('New subscriber:', email)
    res.status(200).json({ message: 'Subscription received' })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
