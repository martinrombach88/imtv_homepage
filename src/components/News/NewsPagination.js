const NewsPagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderedNumbers = pageNumbers.map((number) => {
    return (
      <li key={number} className="page-item news__Page">
        <p onClick={() => paginate(number)} className="page-link" href="#">
          {number}
        </p>
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
