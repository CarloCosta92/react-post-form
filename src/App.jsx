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

    </>
  )
}

export default App
