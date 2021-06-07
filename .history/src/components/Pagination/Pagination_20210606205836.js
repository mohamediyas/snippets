import React from "react";

const Pagination = ({ data, list }) => {
  const totalPage = data / list;

  return (
    <>
      <div className="pagination__container">
        <div>
          {Array.from({ length: totalPage }).map((i, e) => (
            <>
              <a key={e} href={`?page=${e + 1}`}>
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
