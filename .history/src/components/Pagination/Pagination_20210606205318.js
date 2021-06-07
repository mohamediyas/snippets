import React from "react";

const Pagination = ({ data, value }) => {
  let finalizedata = data / value;

  console.log(finalizedata);

  return (
    <>
      <div>
        <div>
          {Array.from({ length: finalizedata }).map((i, e) => (
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
