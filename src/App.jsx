import './App.css'
import Layout from './Components/Layout/Layout'
import Listings from './Components/Listings/Listings'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp/SignUp'
import HomePage from './Components/Home/HomePage'
import Product from './Components/Product/Product'

function App() {

  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='listings' element={<Listings />} />
          <Route path='listings/:id' element={<Product />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
