import { useState } from 'react'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import router from './router'
import { useRoutes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
  return (
    <div className="App">
      {outlet}
    </div>
  )
}

export default App
