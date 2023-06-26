import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import BooksList from './components/BooksList'
import BookItem from './components/BookItem'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import BookStoreContext from './context/BookStoreContext'

import './App.css'
import { useState } from 'react'

const App = () => {

  const [theme, setTheme] = useState(false)

  const changeTheme = () => {
    setTheme(prevTheme => !prevTheme)
  }

  return (
    <BookStoreContext.Provider value={{theme, changeTheme}}>
      {<main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<BooksList />} />
          <Route path='/books/:id' element={<BookItem />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>}
    </BookStoreContext.Provider>
  )
}

export default App
