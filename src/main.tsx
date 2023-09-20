import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { element } from './routes/AllRoutes'
import { RouterProvider } from 'react-router-dom'
import IsLoading from './pages/isLoading/IsLoading'
import { Suspense } from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<IsLoading />} >
      {/* <App /> */}
        <RouterProvider router={element} />
    </Suspense>
  </React.StrictMode>
)
