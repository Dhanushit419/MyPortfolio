import { BrowserRouter, Routes, Route } from 'react-router-dom';
//importing styles.js
import './styles.js'
//importing paths...
import Home from './pages/home.js'
import Projects from './pages/projects.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* setting path for all the files */}
          <Route element={<Home />} path='/' />
          <Route element={<Projects />} path='/projects' />
          <Route element={<About />} path='/about' />
          <Route element={<Contact />} path='/contacts' />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
