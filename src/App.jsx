import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./comps/Header";
import MainPage from "./comps/MainPage.jsx";
import CardDetail from "./comps/CardDetail.jsx";
import FAQ from "./comps/FAQ.jsx";
import Footer from "./comps/Footer.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/card/:category/:id" element={<CardDetail />} />
      </Routes>
      <FAQ />
      <Footer />
    </Router>
  );
}

export default App;
