import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './Routes/Root.jsx'
import { Everything,  Github, Home, TopHeadlines } from './Components'
import githubInfoLoader from './Components/Github/githubInfoLoader.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Root/> }>
        <Route path='' element={ <Home/> } />
        <Route path='everything' element={ <Everything /> } />
        <Route path='topHeadlines' element={ <TopHeadlines />} />
        <Route loader={githubInfoLoader} path='Github' element={ <Github /> } />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
