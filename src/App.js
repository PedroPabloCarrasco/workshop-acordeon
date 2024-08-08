import React from 'react'
import Acordeon from './components/Acordeon'

const App = () => {
  return (
    <div>
      <Acordeon 
        title="Ejemplo de acordeón"
        content="Lorem ipsum"
      />

      <Acordeon 
        title="React JS"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur quam scelerisque, aliquet elit a, euismod mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque interdum posuere risus id pulvinar. Suspendisse sit amet ultricies elit. Cras congue tincidunt leo. Duis eu mi leo. Sed ac ipsum sodales mi sodales auctor vitae malesuada erat. In hac habitasse platea dictumst. Donec at sapien bibendum lacus pretium ullamcorper sed id eros. Praesent pellentesque ullamcorper dapibus."
      />

      <Acordeon 
        title="REACT"
        content="Lorem ipsum"
      />
    </div>
  );
}


export default App