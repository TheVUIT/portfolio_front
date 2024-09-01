/* eslint-disable jsx-a11y/anchor-is-valid */
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import './css/index.css';
import '@mantine/core/styles.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import NotFoundPage from './pages/NotFoundPage';
import ProjectDetail from './pages/ProjectDetail'; // Assure-toi d'importer le composant ProjectDetail

const validPaths = ['/', '/about', '/services', '/contact'];

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {validPaths.map((path) => (
            <Route key={path} path={path} element={getPageComponent(path)} />
          ))}
          <Route path="/portfolio/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Route de fallback pour les chemins non trouvés */}
        </Routes>
      </Layout>
    </Router>
  );
}

function getPageComponent(path) {
  switch (path) {
    case '/':
      return <Home />;
    case '/about':
      return <About />;
    case '/services':
      return <Services />;
    case '/contact':
      return <Contact />;
    default:
      return <NotFoundPage />;
  }
}

export default App;
