import React from "react";
import "./Pagination.css";

const Pagination = ({ data, list }) => {
  const totalPage = data / list;

  return (
    <>
      <div className="pagination__container">
        <div className="pagination">
          {Array.from({ length: totalPage })
            .splice(3, 0, "...")
            .map((i, e) => (
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
