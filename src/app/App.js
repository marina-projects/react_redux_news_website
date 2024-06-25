import './App.css';
import React from 'react';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import NewsList from '../components/newsList/newsList';
import NewsPage from '../components/newsPage/newsPage';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<NewsList />} />
    <Route path='/:id' element={<NewsPage />} />
  </>
));

function App( {state, dispatch} ) {

  return (
    <div className='App'>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;

