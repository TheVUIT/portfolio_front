/* eslint-disable jsx-a11y/anchor-is-valid */
// app.js
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { auth } from "./config/firebase";

import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import UserInfosManagePage from "./pages/UserInfosManagePage";
import ProjectManagePage from "./pages/ProjectManagePage";
import CarrouselManagePage from "./pages/CarrouselManagePage";
import ConexionInfosPage from "./pages/ConexionInfosPage";
import MessageManagePage from "./pages/MessageManagePage";
import Loading from "src/components/Loading";

import Layout from "./components/Layout";
import "./css/index.css";
import "@mantine/core/styles.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectDetail from "./pages/ProjectDetail";
import {Toaster} from "src/components/ui/toaster";
const validPaths = ["/", "/about", "/services", "/contact"];

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Layout>
        <Toaster />
        <Routes>
          {validPaths.map((path) => (
            <Route key={path} path={path} element={getPageComponent(path)} />
          ))}
          <Route path="/portfolio/project/:id" element={<ProjectDetail />} />
          {/* Si l'utilisateur est déjà connecté, redirige vers /admin */}
          <Route
            path="/login"
            element={user ? <Navigate to="/admin" /> : <LoginPage />}
          />
          <Route
            path="/admin/user-manage"
            element={<PrivateRoute element={<UserInfosManagePage />} />}
          />
          <Route
            path="/admin/connexion-manage"
            element={<PrivateRoute element={<ConexionInfosPage />} />}
          />
          <Route
            path="/admin"
            element={<PrivateRoute element={<AdminPage />} />}
          />
          <Route
            path="/admin/carousel-manage"
            element={<PrivateRoute element={<CarrouselManagePage />} />}
          />
          <Route
            path="/admin/project-manage"
            element={<PrivateRoute element={<ProjectManagePage />} />}
          />
          <Route
            path="/admin/message-manage"
            element={<PrivateRoute element={<MessageManagePage />} />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="*" element={<NotFoundPage />} />{" "}
          {/* Route de fallback pour les chemins non trouvés */}
        </Routes>
      </Layout>
    </Router>
  );
};

function getPageComponent(path) {
  switch (path) {
    case "/":
      return <Home />;
    case "/about":
      return <About />;
    case "/services":
      return <Services />;
    case "/contact":
      return <Contact />;
    default:
      return <NotFoundPage />;
  }
}

const PrivateRoute = ({ element }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return user ? element : <Navigate to="/login" />;
};

export default App;
