import React from 'react'
import Index from './pages/home/Index'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <div className='container'>
      <Header/>
      <Index/>
      </div>
      <Footer/>
    </div>
  )
}

export default App