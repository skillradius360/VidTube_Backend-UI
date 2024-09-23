import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider,Route, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './layout.jsx'
import Login from './components/AUTH/Login.jsx'
import Home from './components/HOME/Home.jsx'
import Signup from './components/AUTH/SIGNUP.jsx'


const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
        <Route path="" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        
    </Route>
)
)
createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
    // <Navbar />
  
)
