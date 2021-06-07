import React from "react";

const Pagination = ({ data, list }) => {
  const totalPage = data / list;

  return (
    <>
      <div>
        <div>
          {Array.from({ length: totalPage }).map((i, e) => (
            <>
              <a key={e} href={`?pages/${e}`}>
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
