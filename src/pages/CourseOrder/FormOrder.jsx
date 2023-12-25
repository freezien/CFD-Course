import React, { useEffect } from "react";
import Input from "../../components/Input";
import Select from "../../components/Select";

const FormOrder = ({ register, tags, index }) => {
  const typeOptions =
    tags?.length > 0
      ? [
          { value: "", label: "--" },
          ...tags.map((tag) => ({ value: tag, label: tag })),
        ]
      : [{ value: "", label: "--" }];
  return (
    <div className="itemorder formorder">
      <h3 className="title --t3">Thông tin cá nhân</h3>
      <div className="boxorder" key={index}>
        <div className="form">
          <div className="form-container">
            <div className="form-group">
              <Input
                label="Họ và tên"
                required
                placeholder="Họ và tên"
                {...register("name")}
              />
              <Input
                label="Số điện thoại"
                required
                placeholder="Số điện thoại"
                {...register("phone")}
              />
            </div>
            <div className="form-group">
              <Input
                label="Email"
                required
                placeholder="Email"
                {...register("email")}
              />
              <Input
                label="Hình thức học"
                required
                renderInput={(inputProps) => {
                  return <Select options={typeOptions} {...inputProps} />;
                }}
                {...register("tag")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormOrder;
