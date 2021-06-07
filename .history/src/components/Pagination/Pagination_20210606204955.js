import React from "react";

const Pagination = ({ data }) => {
  console.log(data);
  return (
    <>
      <div>
        <div>
          {Array.from({ length: data }).map((i, e) => (
            <>
              <a key={e} href={`?pages/${e}`}>
                {e}
              </a>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pagination;
