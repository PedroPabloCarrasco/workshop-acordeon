import React from 'react'
import Acordeon from './components/Acordeon'

const App = () => {
  return (
    <div>
      <Acordeon 
      
      title='Ejemplo de acordeon'
      content='Lorem ipsum
      '
      
      />

<Acordeon 
      
      title='React js'
      content='Lorem ipsum s'
      
      />

<Acordeon 
      
      title='REACT'
      content='Lorem ipsum
      '
      
      />

    </div>
  )
}

export default App