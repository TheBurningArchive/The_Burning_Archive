import { useState } from 'react';

export default function Admin() {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [readTime, setReadTime] = useState('');
  const [preview, setPreview] = useState('');

  const ADMIN_PASSWORD = 'tuapassword'; // cambia con la password reale

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) setLoggedIn(true);
    else alert('Password errata');
  };

  const handleSubmit = async () => {
    const article = { title, content, category, readTime, preview, date: new Date().toISOString() };

    // Salvataggio simulato: log in console
    console.log('Articolo salvato:', article);
    alert('Articolo salvato! (da implementare salvataggio reale)');
    
    // Pulisci il form
    setTitle(''); setContent(''); setCategory(''); setReadTime(''); setPreview('');
  };

  if (!loggedIn) {
    return (
      <div className="container">
        <h1>Admin Login</h1>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
        <button onClick={handleLogin}>Login</button>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>New Article</h1>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <input value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" />
      <input value={readTime} onChange={e => setReadTime(e.target.value)} placeholder="Read time (min)" />
      <input value={preview} onChange={e => setPreview(e.target.value)} placeholder="Preview text" />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content"></textarea>
      <button onClick={handleSubmit}>Save Article</button>
    </div>
  )
}
