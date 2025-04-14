import { useState } from 'react'
import axios from 'axios';

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
    const { name, value, type, checked } = e.target;
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  }

  //inserimento endpoint per invio nuovo post
  const endpoint = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(endpoint, formData)
      .then((response) => {
        console.log("Dati inviati con successo", response.data);
        alert("Dati inviati con successo");

      })
      .catch((error) => {
        console.error("Errore durante invio dei dati:", error);
        alert("Errore durante invio dati");

      });

    //reset form
    setFormData({
      author: '',
      title: '',
      body: '',
      public: true,
    });
  }

  return (
    <>
      <h1>React Post Form</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Invia</button>
      </form>

    </>
  )
}

export default App
