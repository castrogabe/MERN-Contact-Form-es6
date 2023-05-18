import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// component
import Header from './components/Header';

// screens
import Contact from './screens/Contact';
import Home from './screens/Home';
import Messages from './screens/Messages';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <HelmetProvider>
        <Header />
        <main className='mt-0'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/messages' element={<Messages />} />
          </Routes>
        </main>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
