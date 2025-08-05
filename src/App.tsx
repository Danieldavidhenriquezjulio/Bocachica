import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Historia from './pages/Historia';
import Cultura from './pages/Cultura';
import Galeria from './pages/Galeria';
import Mapa from './pages/Mapa';
import Contacto from './pages/Contacto';
import Trivia from './pages/Trivia';
import OrdenaTimeline from './pages/OrdenaTimeline';
import EncuentraElError from './pages/EncuentraElError';
import VerdaderoFalso from './pages/VerdaderoFalso';
import Anecdotas from './pages/Anecdotas';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/cultura" element={<Cultura />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/trivia" element={<Trivia />} />
            <Route path="/OrdenaTimeline" element={<OrdenaTimeline />} />
            <Route path="/EncuentraElError" element={<EncuentraElError />} />
            <Route path="/VerdaderoFalso" element={<VerdaderoFalso />} />
            <Route path="/anecdotas" element={<Anecdotas />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;