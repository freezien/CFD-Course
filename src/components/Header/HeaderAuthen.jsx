import React from "react";
import { useAuthen } from "../../components/AuthenContext";

const HeaderAuthen = () => {
  const { openAuthenModal, setRenderForm } = useAuthen();

  const _onRegister = () => {
    openAuthenModal();
    setRenderForm("register");
  };

  const _onLogin = () => {
    openAuthenModal();
    setRenderForm("login");
  };
  return (
    <>
      <div class="header__auth">
        <a
          href="javascript:void(0)"
          class="btn btn--transparent btnmodal"
          data-modal="mdlogin"
        >
          <span onClick={() => _onRegister()}>Đăng ký /&nbsp;</span>
          <span onClick={() => _onLogin()}>Đăng nhập</span>
        </a>
      </div>
    </>
  );
};

export default HeaderAuthen;
