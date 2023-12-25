import React from "react";

const Title = ({ name, author, category, createdAt }) => {
  return (
    <>
      <div className="blogdetail__title">
        <h1 className="title --t2">{name || ""}</h1>
        <ul className="meta">
          <li className="meta__item">{author || ""}</li>
          <li className="meta__item">{category?.name || ""}</li>
          <li className="meta__item">{createdAt || ""}</li>
        </ul>
      </div>
    </>
  );
};

export default Title;
