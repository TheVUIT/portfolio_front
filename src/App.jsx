/* eslint-disable jsx-a11y/anchor-is-valid */
// app.js
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { auth } from "./config/firebase";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Loading from "src/components/Loading";

import Layout from "./components/Layout";
import "./css/index.css";
import "./css/styles.css";
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
          
          <Route path="*" element={<NotFoundPage />} />{" "}
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

export default App;
