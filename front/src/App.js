import './styles/App.css';
import './styles/normalize.css';
import './styles/index.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//BootStrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
//Components
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
//Pages
import HomePage from './pages/HomePage/HomePage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ContactPage from './pages/ContactPage/ContactPage';
import CertificatesPage from './pages/CertificatesPage/CertifiactesPage.jsx';


function App() {
  return (
    <div className='body bodyBackground manrope'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
