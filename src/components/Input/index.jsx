import React from "react";

const Input = ({
  label,
  required,
  error,
  renderInput = undefined,
  ...inputProps
}) => {
  return (
    <div className="form-group" style={{ width: "100%" }}>
      <label className="label">
        {label} {required && <span>*</span>}
      </label>
      {renderInput?.({ ...inputProps, error }) || (
        <input
          className={`form__input ${!!error ? "formerror" : ""}`}
          {...inputProps}
        />
      )}
      <p className="error">{error || ""}</p>
    </div>
  );
};

export default Input;
