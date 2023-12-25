import React from "react";
import { Roles } from "../../constant/roles";
import { formatTimeDisplay } from "../../utils/format";
import { Link } from "react-router-dom";
import { PATHS } from "../../constant/pathname";

const CourseComing = (props) => {
  const { name, slug, image, tags, teams, startDate } = props || {};
  const teacherInfo = teams?.find((member) =>
    member.tags?.includes(Roles.Teacher)
  );

  return (
    <>
      <>
        <div className="coursecoming__item">
          <div className="coursecoming__item-img">
            <a href="course-detail.html">
              <img src={image} alt="Khóa học sắp ra mắt CFD" />
            </a>
          </div>
          <div className="coursecoming__item-content">
            <p className="category label">{name}</p>
            <h2 className="title --t2">
              <a href="course-detail.html">{name}</a>
            </h2>
            {teacherInfo && (
              <>
                <div className="user">
                  <div className="user__img">
                    <img src={teacherInfo.image} alt="Avatar teacher" />
                  </div>
                  <p className="user__name">{teacherInfo.name}</p>
                </div>
              </>
            )}
            <div className="info">
              <div className="labeltext">
                <span className="label --blue">Ngày khai giảng</span>
                <p className="title --t2">{formatTimeDisplay(startDate)}</p>
              </div>
              <div className="labeltext">
                <span className="label --blue">Hình thức học</span>
                {tags && (
                  <p className="title --t2">{tags?.join(" | " || "")}</p>
                )}
              </div>
            </div>
            <div className="btnwrap">
              <Link to={`/register/${slug}`} className="btn btn--primary">
                Đăng Ký Học
              </Link>
              <Link
                to={PATHS.COURSES + `/${slug}`}
                className="btn btn--border --black"
              >
                Xem chi tiết
              </Link>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default CourseComing;
