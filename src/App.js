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
import AboutProfile from "./components/About/AboutProfile.js";
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

// export const LangContext = React.createContext();

function Home() {
  const testText =
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

  return (
    <div className="scrollSnap">
      <Header headerStyle={"header"} />
      <VideoSlider mediaList={mediaList} />
      <HomeSnap object={homeSnapList[0]} />
      <HomeSnap
        title="Test Title"
        text={testText}
        component={<News list={newsList} home={true} />}
      />
      {/* <HomeSnap title="Test Title" text={testText} /> */}
      {/* <Footer /> */}
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
        <Route path="profile" element={<AboutProfile />} />
      </Routes>
    </LangProvider>
  );
}

export default App;
