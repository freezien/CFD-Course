import React from "react";
import { useAuthen } from "../../components/AuthenContext";
import Input from "../../components/Input";
import { message } from "antd";
import TextArea from "../../components/TextArea";

const MyInfo = () => {
  const { profileInfo } = useAuthen({});

  const { firstName, phone, email, password, facebookURL, website, introduce } =
    profileInfo || {};

  const _onSubmit = () => {
    message.success("Cập nhật thông tin thành công!!");
  };

  const _changePasss = () => {
    // Input[password].disabled = false;
    message.error("Chức năng này chưa hoàn thiện!!");
  };

  return (
    <>
      {/* Thông tin cá nhân */}
      <div className="tab__content-item" style={{ display: "block" }}>
        <form onClick={() => _onSubmit} className="form">
          <div className="form-container">
            <Input
              label={"họ và tên"}
              type="text"
              required
              defaultValue={firstName || ""}
            />
            <Input
              label={"số điện thoại"}
              type="text"
              required
              defaultValue={phone || ""}
            />
          </div>
          <div className="form-container" style={{ display: "relative" }}>
            <Input
              label={"email"}
              defaultValue={email || ""}
              disabled
              required
              type="email"
            />
            <Input
              label="Mật khẩu"
              defaultValue={password || ""}
              type="password"
              disabled
              required
            />
            <div
              className="textchange btnmodal"
              data-modal="mdchangepass"
              style={{
                position: "absolute",
                right: "50px",
                paddingTop: "10px",
              }}
              onClick={_changePasss}
            >
              Đổi mật khẩu
            </div>
          </div>
          <Input
            label={"Facebook URL"}
            defaultValue={facebookURL || ""}
            type="text"
            required
            className="form__input"
          />
          <Input label={"Website"} defaultValue={website || ""} type="text" />
          <Input
            label={"Giới thiệu bản thân"}
            name="content"
            renderInput={(inputProps) => <TextArea {...inputProps} />}
            defaultValue={introduce || ""}
          />
          {/* <p className="noti">Cập nhận thông tin thành công</p> */}
          <div className="form-group">
            <div className="btnsubmit">
              <button className="btn btn--primary">Lưu lại</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default MyInfo;
