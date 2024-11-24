import { useState } from 'react';
import MenuBar from './components/MenuBar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Project from './pages/Project';

function App() {
  const [pageSelect, setPageSelect] = useState('Home');
  return (
    <div>
      <MenuBar setPageSelect={setPageSelect} />
      {pageSelect === 'Home' && <Home />}
      {pageSelect === 'About' && <About />}
      {pageSelect === 'Experience' && <Experience />}
      {pageSelect === 'Project' && <Project />}
      {pageSelect === 'Contact' && <Contact />}
    </div>
  );
}

export default App;