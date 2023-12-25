import React from "react";

const Content = ({ image, description }) => {
  return (
    <>
      <div className="blogdetail__content">
        <img src={image || ""} alt="Post thumnail" />
        <div
          className="blogdetail__content-entry"
          dangerouslySetInnerHTML={{ __html: description || "" }}
        ></div>
        <div className="blogdetail__line" />
        <div className="blogdetail__content-social btngroup">
          <a href="#" className="btn btn-fb">
            <img src="/img/icon-fb-share.svg" alt="" />
            <span>Share</span>
          </a>
          <a href="#" className="btn btn-linkedin">
            <img src="/img/icon-in-share.svg" alt="" />
            <span>Share</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Content;
