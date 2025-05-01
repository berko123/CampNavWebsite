import React from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;