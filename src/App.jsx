import './App.css'
import Layout from './Components/Layout/Layout'
import Listings from './Components/Listings/Listings'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp/SignUp'
import HomePage from './Components/Home/HomePage'
import Product from './Components/Product/Product'
import Favorites from './Components/Favorites/Favorites'
import { useState } from 'react'

function App() {
  const [favorites, setFavorites] = useState([]);
  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='listings' element={<Listings favorites={favorites} setFavorites={setFavorites}/>} />
          <Route path='listings/:id' element={<Product />} />
          <Route path='favorites' element={<Favorites favorites={favorites} setFavorites={setFavorites}/>}/>
          <Route path='sign-up' element={<SignUp />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
