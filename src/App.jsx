

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Country from './pages/Country';

import AppLayout from './components/layout/AppLayout';
import { ErrorPage }from './pages/ErrorPage';
import CountryDetails from './components/layout/CountryDetails';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element : <AppLayout/>,
      errorElement : <ErrorPage/>,
      children :[
        {
          path : "/",
          element : <Home/>
        },
        {
          path : "/about",
          element : <About/>
        },
        {
          path : "country/:id",
          element : <CountryDetails/>
        },
        {
          path : "/contact",
          element : <Contact/>
        },
        {
          path : "/country",
          element : <Country/>
        },
      ]
    },
    
  ])
 

  return (
    <>
    <RouterProvider router={router}>

    </RouterProvider>
     {/* <Navbar/>
     <Herosection/>
     <Footer/> */}
    </>
  )
}

export default App
