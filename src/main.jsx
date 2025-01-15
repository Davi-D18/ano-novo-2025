import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './App.jsx'
import { AnimatedWrapper } from './components/animatedwrapper/AnimatedWrapper.jsx'
import { Message } from './pages/Message/Message.jsx'
import './styles/global.scss'

const router = createBrowserRouter([
  {
    element: <AnimatedWrapper enterAnimation={true} exitAnimation={false} />,
    children: [{ path: '/', element: <Message /> }]
  },
  {
    element: <AnimatedWrapper enterAnimation={true} exitAnimation={false} />,
    children: [{ path: '/inicio', element: <App /> }]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
