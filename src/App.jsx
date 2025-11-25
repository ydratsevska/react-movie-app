import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import { useEffect, useState } from 'react';

function App() {
  const [err, setErr] = useState('')

  const API_KEY = import.meta.env.VITE_OMDb_API_KEY;
  useEffect(
    const fetchMovies = async() => {
        try {
          let url;

          url = `http://www.omdbapi.com/?apikey=${API_KEY}&`
        } catch {

        }
  }
  )

  

  return (
    <>
      <div className='flex flex-col px-16 mx-auto min-h-screen'>
        <Header /> 
        <Hero />
        <Footer />
      </div>
    </>
  )
}

export default App
