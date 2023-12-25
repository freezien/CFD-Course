import React from "react";
import { NavLink, Link } from "react-router-dom";
import { formatCurrency } from "../../utils/format";
import { PATHS } from "../../constant/pathname";
import { Roles } from "../../constant/roles";

const CourseItem = (props) => {
  const { name, title, slug, tags, image, price, teams } = props || {};
  const teacherInfo = teams?.find((member) =>
    member.tags?.includes(Roles.Teacher)
  );

  const orderLink = `/orders/${slug}`;
  return (
    <>
      <div className="courses__list-item">
        <div className="img">
          <NavLink to={PATHS.COURSES + `/${slug}`}>
            <img src={image} alt="Khóa học CFD" className="course__thumbnail" />
            {tags && (
              <span className="course__img-badge badge">
                {tags.join(" | ") || ""}
              </span>
            )}
          </NavLink>
        </div>
        <div className="content">
          <p className="label">{title}</p>
          <h3 className="title --t3">
            <Link to={PATHS.COURSES + `/${slug}`}>{name}</Link>
          </h3>
          <div className="content__info">
            <div className="user">
              {teacherInfo && (
                <>
                  <div className="user__img">
                    <img src={teacherInfo.image} alt="Avatar teacher" />
                  </div>
                  <p className="user__name">{teacherInfo.name}</p>
                </>
              )}
            </div>
            <div className="price">
              <strong>{formatCurrency(price)}đ</strong>
            </div>
          </div>
          <div className="content__action" style={{ display: "flex" }}>
            <Link to={orderLink} className="btn btn--primary">
              Đăng ký ngay
            </Link>
            <Link to={orderLink} className="btn btn--default">
              <img src="/img/icon-paper.svg" alt="icon paper" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseItem;
