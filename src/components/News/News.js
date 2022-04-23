import Header from "../Header/Header";
import Footer from "../Header/Footer";
import "./News.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NewsCards from "./NewsCards";
import NewsPagination from "./NewsPagination";

const News = ({ list }) => {
  const navigate = useNavigate();

  //Pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <Header style={"header initialPos"} />
      <div className="news">
        <h1>최신 뉴스</h1>
        <NewsCards currentPosts={currentPosts} />
        <NewsPagination
          postsPerPage={postsPerPage}
          totalPosts={list.length}
          paginate={paginate}
        />
      </div>
      <Footer />
    </>
  );
};

export default News;
