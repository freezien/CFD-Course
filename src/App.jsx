import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import ChangePassword from "./pages/ChangePassword";
import Course from "./pages/Course";
import CourseDetail from "./pages/CourseDetail";
import CourseOrder from "./pages/CourseOrder";
import Page404 from "./pages/Page404";
import PaymentMethod from "./pages/PaymentMethod";
import Privacy from "./pages/Privacy";
import ProfileLayout from "./layout/ProfileLayout";
import MyInfo from "./pages/ProfilePage/MyInfo";
import MyCourses from "./pages/ProfilePage/MyCourses";
import MyPayment from "./pages/ProfilePage/MyPayment";
import { PATHS } from "./constant/pathname";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path={PATHS.HOME} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={PATHS.CONTACT} element={<Contact />} />
          <Route path={PATHS.ABOUT} element={<About />} />
          <Route path={PATHS.BLOG} element={<Blog />} />
          <Route path={PATHS.BLOG_DETAIL} element={<BlogDetail />} />
          <Route path={PATHS.CHANGEPASSWORD} element={<ChangePassword />} />
          <Route path={PATHS.COURSES} element={<Course />} />
          <Route path={PATHS.COURSES_DETAIL} element={<CourseDetail />} />
          <Route path={PATHS.COURSES_ORDER} element={<CourseOrder />} />
          <Route path="*" element={<Page404 />} />
          <Route path={PATHS.PAYMENT} element={<PaymentMethod />} />
          <Route path={PATHS.PRIVACY} element={<Privacy />} />
          <Route element={<PrivateRoute redirectPath={PATHS.HOME} />}>
            <Route path={PATHS.PROFILE.INDEX} element={<ProfileLayout />}>
              <Route index element={<MyInfo />} />
              <Route path={PATHS.PROFILE.COURSES} element={<MyCourses />} />
              <Route path={PATHS.PROFILE.PAYMENT} element={<MyPayment />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
