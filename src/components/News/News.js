import Header from "../Header/Header";
import Footer from "../Header/Footer";
import "./News.css";
import { useState } from "react";
import NewsCards from "./NewsCards";
import NewsPagination from "./NewsPagination";
import { useLang } from "../Header/LangContext";

const News = ({ list, home }) => {
  //Pagination
  let posts = home ? 1 : 4;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(posts);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);
  const lang = useLang();

  if (home) {
    return (
      <NewsCards
        currentPosts={currentPosts}
        home={home}
        pagination={
          <NewsPagination
            postsPerPage={postsPerPage}
            totalPosts={list.length}
            paginate={paginate}
          />
        }
      />
    );
  } else {
    return (
      <div className="scroll">
        <Header headerStyle={"header initialPos"} />
        <div className="news">
          <h1>{lang ? "최신 뉴스" : "latest news"}</h1>
          <NewsCards currentPosts={currentPosts} />
          <NewsPagination
            postsPerPage={postsPerPage}
            totalPosts={list.length}
            paginate={paginate}
          />
        </div>
        <Footer />
      </div>
    );
  }
};

export default News;
