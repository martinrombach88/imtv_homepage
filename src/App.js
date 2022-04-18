import { Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header/Header.js";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.js";
import Media from "./components/Media/Media.js";
import Contact from "./components/Contact.js";
import News from "./components/News/News.js";
import NewsArticleView from "./components/News/NewsArticleView.js";
import About from "./components/About.js";
import VideoSlider from "./components/VideoSlider/VideoSlider";

function Home() {
  return (
    <>
      <Header style={"header"} />
      <VideoSlider />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="media" element={<Media />} />
        <Route path="about" element={<About />} />
        <Route path="news" element={<News />} />
        <Route path="news_article" element={<NewsArticleView />} />
        <Route path="contact" element={<Contact />} />
        <Route path="video" element={<VideoPlayer />} />
      </Routes>
    </div>
  );
}

export default App;
