import { Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header/Header.js";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.js";
import Media from "./components/Media/Media.js";
import Contact from "./components/Contact.js";
import News from "./components/News/News.js";
import NewsArticleView from "./components/News/NewsArticleView.js";
import About from "./components/About/About.js";
import VideoSlider from "./components/VideoSlider/VideoSlider";
import mediaList from "./components/mediaList.js";
import newsList from "./components/newsList.js";

function Home() {
  return (
    <>
      <Header style={"header"} />
      <VideoSlider mediaList={mediaList} />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="media" element={<Media mediaList={mediaList} />} />
        <Route path="about" element={<About />} />
        <Route path="news" element={<News list={newsList} />} />
        <Route path="news_article" element={<NewsArticleView />} />
        <Route path="contact" element={<Contact />} />
        <Route path="video" element={<VideoPlayer />} />
      </Routes>
    </div>
  );
}

export default App;
