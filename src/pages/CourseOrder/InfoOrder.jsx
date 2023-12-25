import React from "react";

const InfoOrder = ({ id, image, name, teacher, price }) => {
  return (
    <>
      <div className="itemorder infoorder" key={id}>
        <h3 className="title --t3">Thông tin đơn hàng</h3>
        <div className="boxorder">
          <div className="boxorder__col">
            <label className="label">{name || ""}</label>
            <div className="boxorder__col-course">
              <div className="img">
                <img src={image || ""} alt="" />
              </div>
              <div className="info">
                <p className="name">
                  <strong>{teacher?.name || ""}</strong>
                </p>
                <p>{teacher?.tags || ""}</p>
              </div>
            </div>
          </div>
          <div className="boxorder__col">
            <label className="label">Tạm tính</label>
            <p>{price || ""}Đ</p>
          </div>
          <div className="boxorder__col">
            <label className="label">Giảm giá</label>
            <p>0đ</p>
          </div>
          <div className="boxorder__col">
            <label className="label">thành tiền</label>
            <p>
              <strong>{price || ""}Đ</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoOrder;
