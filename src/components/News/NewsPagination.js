const NewsPagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderedNumbers = pageNumbers.map((number) => {
    return (
      <li key={number} className="page-item news__Page">
        <a onClick={() => paginate(number)} className="page-link" href="#">
          {number}
        </a>
      </li>
    );
  });
  return (
    <nav>
      <ul className="pagination">{renderedNumbers}</ul>
    </nav>
  );
};

export default NewsPagination;
