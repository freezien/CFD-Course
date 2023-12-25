import React from "react";
import { Link, NavLink } from "react-router-dom";
import { PATHS } from "../../constant/pathname";
import { LOCAL_STORAGE } from "../../constant/localStorage";
import { useAuthen } from "../AuthenContext";

const HeaderLogged = () => {
  const { profileInfo, onLogout, openAuthenModal } = useAuthen();

  return (
    <>
      <div className="header__logged">
        <div className="userlogged">
          <div
            className="userlogged__avatar user"
            data-dropdown="userlogged__dropdown"
          >
            <div className="userlogged__avatar-img user__img">
              <img src="/img/avatar_nghia.jpg" alt="Avatar teacher" />
            </div>
            <i className="userlogged__avatar-icon">
              <svg
                width={14}
                height={14}
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3.5L7.00003 10.5L14 3.5H0Z" fill="white" />
              </svg>
            </i>
          </div>
          <div
            className="userlogged__dropdown dropdown"
            onClick={() => {
              if (!!!profileInfo?.id) {
                openAuthenModal();
              }
            }}
          >
            <div className="userlogged__dropdown-info">
              <div className="user__img">
                <img src="/img/avatar_nghia.jpg" alt="Avatar teacher" />
              </div>
              <Link to={PATHS.PROFILE.INDEX} className="user__info">
                <p className="title --t4">
                  <strong>{profileInfo?.firstName || "User Name"}</strong>
                </p>
                <span className="email">{profileInfo?.email || "Email"}</span>
              </Link>
            </div>
            <div className="userlogged__dropdown-list">
              <Link to={PATHS.PROFILE.COURSES}>Khóa học của tôi</Link>
              <Link to={PATHS.PROFILE.PAYMENT}>Lịch sử thanh toán</Link>
              <Link to={PATHS.CONTACT}>Hỗ trợ</Link>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  if (!!!localStorage.getItem(LOCAL_STORAGE.token)) {
                    openAuthenModal();
                  } else {
                    onLogout();
                  }
                }}
              >
                {!!profileInfo?.id ? "Đăng xuất" : "Đăng Nhập"}{" "}
                <i>
                  <img src="/img/iconlogout.svg" alt="" />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderLogged;
