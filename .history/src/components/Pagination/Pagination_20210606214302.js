import React from "react";
import "./Pagination.css";

const Pagination = ({ data, list }) => {
  const totalPage = data / list;

  const test = Array.from({ length: totalPage }).splice(4, 4, "...");

  console.log(test);

  return (
    <>
      <div className="pagination__container">
        <div className="pagination">
          {Array.from({ length: totalPage }).map((i, e) => (
            <>
              <a className="pagination__sing" key={e} href={`?page=${e + 1}`}>
                {e + 1}
              </a>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pagination;
