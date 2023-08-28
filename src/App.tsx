import React from 'react'
import Person from './components/Person'
import './App.css'

const App = () => {

  return (
    <div className='App'>
      <Person name='Saify' email='saify@gamil.com' age={23} />
    </div>
  )
}

export default App