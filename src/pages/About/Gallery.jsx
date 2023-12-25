import { Skeleton } from "antd";
import React from "react";

const Gallery = ({ galleries, loading }) => {
  return (
    <>
      <section className="aboutgallery --scpadding">
        <div className="container">
          <h2 className="aboutgallery__title title --t2 --white">
            CFD Circle{" "}
            <span className="color--primary">là một team gắn kết,</span> <br />
            cùng nhau học tập, vui chơi và phát triển
          </h2>
          <div className="aboutgallery__imgs">
            {!loading && galleries?.length === 0 && (
              <Empty
                description="Không tìm thấy dữ liệu"
                style={{ margin: "0 auto" }}
              />
            )}
            {galleries?.length > 0 &&
              galleries.map((image, index) => {
                return (
                  <img src={image || ""} alt="CFD galleries" key={index} />
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
