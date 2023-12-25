const BLOG_PATH = "/blogs";
const COURSES_PATH = "/courses";
const PROFILE_PATH = "/profile";

export const PATHS = {
  HOME: "/",
  CONTACT: "contact",
  ABOUT: "about",
  BLOG: BLOG_PATH,
  BLOG_DETAIL: BLOG_PATH + `/:slug`,
  CHANGEPASSWORD: "changepassword",
  COURSES: COURSES_PATH,
  COURSES_DETAIL: COURSES_PATH + `/:slug`,
  COURSES_ORDER: "/orders/:slug",
  PROFILE: {
    INDEX: PROFILE_PATH,
    COURSES: PROFILE_PATH + "/my-courses",
    PAYMENT: PROFILE_PATH + "/my-payment",
  },
  PRIVACY: "privacy",
  PAYMENT: "payment-method",
};
