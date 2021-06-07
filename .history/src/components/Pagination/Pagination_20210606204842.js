import React from "react";

const Pagination = ({ data }) => {
  console.log(data);
  return (
    <>
      <div>
        <div>
          {Array.from({ length: data }).map((i, e) => console.log(i, e))}
        </div>
      </div>
    </>
  );
};

export default Pagination;
