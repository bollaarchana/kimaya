import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";

const Service = lazy(() => import("./components/Services"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const IndustriesHome = lazy(() => import("./components/IndustriesHome"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Insights = lazy(() => import("./components/Insights"));


import Layout from "./components/Layout";
import "./App.css";
import Home from "./components/Home";
import Careers from "./components/Careers";


function App() {
  return (
    <BrowserRouter className="App">
            <ScrollToHash />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          {/* <Route path="/careers" element={<Careers />} /> */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/#industries" element={<IndustriesHome />} />
          {/* <Route path="/insights" element={<Insights />} /> */}
          <Route path="/service" element={<Service />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
