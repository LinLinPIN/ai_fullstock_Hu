import router from "./router"
import { useRoutes } from 'react-router-dom';
import React from "react"

function App() {
  const outlet = useRoutes(router)
  return (
    <>
    <React.Suspense fallback={<div>Loading.....</div>}>
    {outlet}
    </React.Suspense>
    </>
  )
}

export default App
