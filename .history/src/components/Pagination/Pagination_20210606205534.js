import React from "react";

const Pagination = ({ data, value }) => {
  console.log(data, value);

  return (
    <>
      <div>
        <div>
          {Array.from({ length: 20 }).map((i, e) => (
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
