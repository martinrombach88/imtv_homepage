import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Footer from "./components/Header/Footer.js";
import HomeSnap from "./components/HomeSnap/HomeSnap.js";
import VideoSlider from "./components/VideoSlider/VideoSlider";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.js";
import Media from "./components/Media/Media.js";
import News from "./components/News/News.js";
import NewsArticleView from "./components/News/NewsArticleView.js";
import About from "./components/About/About.js";
import History from "./components/History/History.js";
import Contact from "./components/Contact/Contact.js";
import ContactProposal from "./components/Contact/ContactProposal.js";
import ContactInquiry from "./components/Contact/ContactInquiry.js";
import mediaList from "./components/mediaList.js";
import newsList from "./components/newsList.js";
import staffList from "./components/staffList.js";
import homeSnapList from "./components/homeSnapList.js";
import { LangProvider } from "./components/Header/LangContext";
import "./components/HomeSnap/HomeSnap.css";

function Home() {
  return (
    <div className="scrollSnap">
      <Header headerStyle={"header"} />
      <VideoSlider mediaList={mediaList} />
      <HomeSnap
        object={homeSnapList[0]}
        styleObject={homeSnapList[0]}
        article={newsList[1]}
      />
      <HomeSnap component={<News list={newsList} home={true} />} />
      <Footer fixed={true} />
    </div>
  );
}

function App() {
  return (
    <LangProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="media" element={<Media mediaList={mediaList} />} />
        <Route path="about" element={<About staffList={staffList} />} />
        <Route path="history" element={<History />} />
        <Route path="news" element={<News list={newsList} />} />
        <Route path="news_article" element={<NewsArticleView />} />
        <Route path="contact" element={<Contact />} />
        <Route path="proposal" element={<ContactProposal />} />
        <Route path="inquiry" element={<ContactInquiry />} />
        <Route path="video" element={<VideoPlayer />} />
      </Routes>
    </LangProvider>
  );
}

export default App;
