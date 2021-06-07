import React from "react";

const Pagination = ({ data }) => {
  return (
    <>
      <div>
        <div>
          {Array.from({ length: data }).map((i, e) => (
            <a key={i} href={`page/${i}`}>
              {i}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pagination;
