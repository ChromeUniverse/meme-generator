import React from 'react'
import Header from './components/Header'
import Meme from './components/Meme'

function App() {
  return (
    <>
      <Header />
      <div className='main'>
        <Meme />
      </div>
    </>
  )
}

export default App