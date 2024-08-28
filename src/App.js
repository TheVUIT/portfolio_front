/* eslint-disable jsx-a11y/anchor-is-valid */
// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import './css/index.css';
import '@mantine/core/styles.css';
import Home from './pages/Home';
import Join from './pages/Join';
import Partnership from './pages/Partnership';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import History from './pages/History';
import Member from './pages/Member';

const validPaths = ['/', '/join', '/partners', '/contact', "/blog", "/histoire", "/membre"];

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
    case '/join':
      return <Join />;
    case '/partners':
      return <Partnership />;
    case '/contact':
      return <Contact/>;
    case '/blog':
      return <Blog/>
    case '/histoire':
      return <History/>
    case '/membre':
      return <Member/>
    default:
      return <NotFoundPage />; // Affiche une page par défaut pour les chemins non valides
  }
}

function NotFoundPage() {
  return <div>Page not found</div>;
}

export default App;
