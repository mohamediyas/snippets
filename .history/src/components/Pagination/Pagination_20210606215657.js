import React from "react";
import "./Pagination.css";

const Pagination = ({ data, list }) => {
  const totalPage = data / list;

  const test = Array.from({ length: totalPage }).map((e, i) => i);
  const pagination = Array.from({ length: totalPage }).map((e, i) => i);

  const test1 = test.splice(4, 4, "...");
  console.log(test1, test);

  return (
    <>
      <div className="pagination__container">
        <div className="pagination">
          {test.map((e) => {
            if (e + 1 === 3) {
              pagination.map((e) => (
                <a className="pagination__sing" key={e} href={`?page=${e + 1}`}>
                  {e === "..." ? e : e + 1}
                </a>
              ));
            }

            <a className="pagination__sing" key={e} href={`?page=${e + 1}`}>
              {e === "..." ? e : e + 1}
            </a>;
          })}

          {/* Array.from({ length: totalPage }).map((i, e) => (
            <>
              <a className="pagination__sing" key={e} href={`?page=${e + 1}`}>
                {e + 1}
              </a>
            </>
          )) */}
        </div>
      </div>
    </>
  );
};

export default Pagination;
