/* eslint-disable jsx-a11y/anchor-is-valid */
// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import './css/index.css';
import '@mantine/core/styles.css';
import Home from './pages/Home';
import Partnership from './pages/Partnership';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';

const validPaths = ['/', '/about', '/partners', '/contact', "/blog", "/histoire", "/membre"];

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {validPaths.map((path) => (
            <Route key={path} path={path} element={getPageComponent(path)} />
          ))}
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
      return <Contact/>;   
    default:
      return <NotFoundPage />; // Affiche une page par défaut pour les chemins non valides
  }
}

function NotFoundPage() {
  return <div>Page not found</div>;
}

export default App;
