import { useState } from 'react'

import './App.css'

function App() {

  //variabile di stato per il nostro oggetto da spedire ad api
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: true
  });

  //funzione per gestire inserimento
  function handleFormData(e) {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  }





  return (
    <>
      <h1>React Post Form</h1>

      <div>
        <label htmlFor="author">inserisci autore </label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleFormData}
          placeholder="Inserisci autore"

        />

        <hr />
      </ div>

      <div>
        <label htmlFor="title">inserisci titolo </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleFormData}
          placeholder="Inserisci titolo"

        />

        <hr />
      </ div>

      <div>
        <label htmlFor="body">inserisci corpo del post </label>
        <input
          type="text"
          name="body"
          value={formData.body}
          onChange={handleFormData}
          placeholder="Inserisci corpo del post"

        />

        <hr />
      </ div>

      <label>
        Pubblico:
        <input
          type="checkbox"
          name="public"
          checked={formData.public}
          onChange={handleFormData}
        />
      </label>

    </>
  )
}

export default App
