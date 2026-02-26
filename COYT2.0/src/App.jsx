import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // 
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Frontpage from './pages/Frontpage'; 
import About from './pages/About';
import Archive from './pages/Archive';
import ForRetailers from './pages/ForRetailers';
import './App.css';
import CollectionPage from './pages/CollectionPage';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Navigation />

        {/* Helmet til title + favicon */}
        <Helmet>
          <title>COYT</title>
          <link rel="icon" type="image/png" href="/logo.png" />
        </Helmet>

        {/* React Router */}
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/frontpage" element={<Frontpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forretailers" element={<ForRetailers />} />
          <Route path="/collectionpage" element={<CollectionPage />} />
          <Route path="/archive/:id" element={<CollectionPage />} />
          {/* Tilføj flere routes her */}
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;

