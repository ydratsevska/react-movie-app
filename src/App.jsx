import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Hero from './Components/Hero'

function App() {

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
