import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import Navbar from './Components/Navbar.js';
import Home from './Components/Home/Home.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        {/* Navigation Bar - will be on all pages */}
        <Navbar />
        
        {/* Main content area with flex-grow to push footer down */}
        <main className="flex-grow">
          {/* Routes for different pages */}
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        
        {/* Footer - will be on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
