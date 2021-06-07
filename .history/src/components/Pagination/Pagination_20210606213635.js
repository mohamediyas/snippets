import React from "react";
import "./Pagination.css";

const Pagination = ({ data, list }) => {
  const totalPage = data / list;

  return (
    <>
      <div className="pagination__container">
        <div className="pagination">
          {Array.from({ length: totalPage }).map((i, e) => (
            <>
              <a className="pagination__sing" key={e} href={`?page=${e + 1}`}>
                {e === 3 || e === 7 ? "..." : e + 1 === 4 ? "..." : e + 1}
              </a>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pagination;
