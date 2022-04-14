import { Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Portfolio from "./components/Portfolio.js";
import Contact from "./components/Contact.js";
import News from "./components/News.js";
import About from "./components/About.js";
import VideoSlider from "./components/VideoSlider/VideoSlider";

function Home() {
  return (
    <>
      <Header />
      <VideoSlider />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
