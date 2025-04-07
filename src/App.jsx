import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./comps/Header";
import MainPage from "./comps/MainPage.jsx";
import CardDetail from "./comps/CardDetail.jsx";
import FAQ from "./comps/FAQ.jsx";
import Footer from "./comps/Footer.jsx";
import About from "./comps/About.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/card/:category/:id" element={<CardDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <FAQ />
      <Footer />
    </Router>
  );
}

export default App;
