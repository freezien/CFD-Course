import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../constant/pathname";
import useQuery from "../../hooks/useQuery";
import { blogService } from "../../services/blogService";
import { formatTimeDisplay } from "../../utils/format";

const Blog = () => {
  const { data: blogData, loading: blogLoading } = useQuery(() =>
    blogService.getBlogs()
  );
  const blogs = blogData?.blogs || {};

  const { data: blogCategories, loading: blogCategoriesLoading } = useQuery(
    () => blogService.getBlogsByCategories()
  );
  const blogCategory = blogCategories?.blogs || {};

  return (
    <>
      <main className="mainwrapper blog --ptop">
        <div className="container">
          <div className="textbox">
            <div className="container">
              <h2 className="title --t2">Blog</h2>
            </div>
          </div>
          <div className="blog__menu">
            <a href="#" className="blog__menu-item active">
              Tất cả
            </a>
            {!!blogCategory.length > 0 &&
              blogCategory.map((item, index) => {
                const { id, name, slug } = item || {};
                return (
                  <a href="#" className="blog__menu-item" key={id || index}>
                    {name || ""}
                  </a>
                );
              })}
          </div>
          <div className="blog__list">
            {!!blogs.length > 0 &&
              blogs.map((item, index) => {
                const { author, category, createdAt, image, id, name, slug } =
                  item || {};
                return (
                  <div className="blog__list-item" key={id || index}>
                    <div className="img">
                      <Link to={PATHS.BLOG + `/${slug}`}>
                        <img src={image || ""} className="course__thumbnail" />
                      </Link>
                    </div>
                    <div className="content">
                      <p className="label">{category?.name || ""}</p>
                      <h2 className="title --t3">
                        <Link to={PATHS.BLOG + `/${slug}`}>{name || ""}</Link>
                      </h2>
                      <div className="content__info">
                        <div className="user">
                          <div className="user__img">
                            <img
                              src="/img/avatar_nghia.jpg"
                              alt="Avatar teacher"
                            />
                          </div>
                          <p className="user__name">{author || ""}</p>
                        </div>
                        <div className="date">
                          {formatTimeDisplay(createdAt)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <ul className="paging">
            <li>
              <a href="#">
                <i>
                  <img src="/img/iconprev.svg" alt="" />
                </i>
              </a>
            </li>
            <li>
              <a href="#" className="active">
                1
              </a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">
                <i>
                  <img src="/img/iconprev.svg" alt="" />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Blog;
