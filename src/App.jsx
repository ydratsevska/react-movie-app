import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import { useEffect, useState } from 'react';

function App() {
  const [err, setError] = useState('')

  const API_KEY = import.meta.env.VITE_OMDb_API_KEY;
  useEffect(
    const fetchMovies = async() => {
        try {
          let url;

          url = `https://api.simkl.com/?apikey=${API_KEY}&`;
          const res = await fetch(url);

          if (!response.ok) {
              throw new Error(`Failed fetching`);
          }

          const data = await response.json();

          console.log(data);

        } catch (err){
            setError('Failed to fetch data')
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
