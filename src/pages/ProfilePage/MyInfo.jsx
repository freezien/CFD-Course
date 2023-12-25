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

  return (
    <>
      {/* Thông tin cá nhân */}
      <div className="tab__content-item" style={{ display: "block" }}>
        <form onClick={() => _onSubmit} className="form">
          <div className="form-container">
            <div className="form-group">
              <Input
                label={"họ và tên"}
                type="text"
                required
                defaultValue={firstName || ""}
              />
            </div>
            <div className="form-group">
              <Input
                label={"số điện thoại"}
                type="text"
                required
                defaultValue={phone || ""}
              />
            </div>
          </div>
          <div className="form-container">
            <div className="form-group">
              <Input
                label={"email"}
                defaultValue={email || ""}
                disabled
                required
                type="email"
              />
            </div>
            <div className="form-group">
              <div
                className="form-grouppass"
                style={{
                  flexDirection: "column",
                }}
              >
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
                  style={{ position: "absolute", right: 0 }}
                >
                  Đổi mật khẩu
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <Input
              label={"Facebook URL"}
              defaultValue={facebookURL || ""}
              type="text"
              required
              className="form__input"
            />
          </div>
          <div className="form-group">
            <Input label={"Website"} defaultValue={website || ""} type="text" />
          </div>
          <div className="form-container textarea">
            <Input
              label={"Giới thiệu bản thân"}
              name="content"
              renderInput={(inputProps) => <TextArea {...inputProps} />}
              defaultValue={introduce || ""}
            />
          </div>
          <p className="noti">Cập nhận thông tin thành công</p>
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
