import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import Home from "./components/Home";
import AboutUs from "./components/Aboutus";
import Careers from "./components/Careers";
import ContactUs from "./components/ContactUs";
import Industries from "./components/Industries";
import Insights from "./components/Insights";
import Service from "./components/Services";

function App() {
  return (
    <BrowserRouter className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
