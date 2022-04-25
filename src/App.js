import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Footer from "./components/Header/Footer.js";
import VideoSlider from "./components/VideoSlider/VideoSlider";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.js";
import Media from "./components/Media/Media.js";
import News from "./components/News/News.js";
import NewsArticleView from "./components/News/NewsArticleView.js";
import About from "./components/About/About.js";
import AboutProfile from "./components/About/AboutProfile.js";
import Contact from "./components/Contact/Contact.js";
import ContactProposal from "./components/Contact/ContactProposal.js";
import ContactInquiry from "./components/Contact/ContactInquiry.js";
import mediaList from "./components/mediaList.js";
import newsList from "./components/newsList.js";
import staffList from "./components/staffList.js";
import {
  LangProvider,
  useLang,
  useLangUpdate,
} from "./components/Header/LangContext";

// export const LangContext = React.createContext();

function Home() {
  return (
    <LangProvider>
      <Header style={"header"} />
      <VideoSlider mediaList={mediaList} />
      <Footer />
    </LangProvider>
  );
}

function App() {
  return (
    <LangProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="media" element={<Media mediaList={mediaList} />} />
          <Route path="about" element={<About staffList={staffList} />} />
          <Route path="news" element={<News list={newsList} />} />
          <Route path="news_article" element={<NewsArticleView />} />
          <Route path="contact" element={<Contact />} />
          <Route path="proposal" element={<ContactProposal />} />
          <Route path="inquiry" element={<ContactInquiry />} />
          <Route path="video" element={<VideoPlayer />} />
          <Route path="profile" element={<AboutProfile />} />
        </Routes>
      </div>
    </LangProvider>
  );
}

export default App;
