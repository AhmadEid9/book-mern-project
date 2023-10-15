import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CreateBook from './pages/createBook';
import DeleteBook from './pages/deleteBook';
import EditBook from './pages/editBook';
import ShowBook from './pages/showBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook />}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
    </Routes>
    
  )
}

export default App