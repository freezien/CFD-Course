import React, { useEffect, useState } from "react";
import useMutation from "../../hooks/useMutation";
import { courseService } from "../../services/courseService";
import { useNavigate, useParams } from "react-router-dom";
import InfoOrder from "./InfoOrder";
import FormOrder from "./FormOrder";
import PaymentOrder from "./PaymentOrder";
import Button from "../../components/Button";
import { Roles } from "../../constant/roles";
import { formatCurrency } from "../../utils/format";
import { useAuthen } from "../../components/AuthenContext";
import useForm from "../../hooks/useForm";
import { regrexRule, requireRule } from "../../utils/validate";
import { message } from "antd";
import { PATHS } from "../../constant/pathname";

const CourseOrder = () => {
  const { slug } = useParams();
  const [paymentMethod, setPaymentMethod] = useState("");
  const handlePaymentMethodChange = (payment) => {
    setPaymentMethod(payment);
  };
  const {
    data: courseDetailData,
    loading: courseDetailLoading,
    execute,
  } = useMutation(courseService.getCourseBySlug);

  useEffect(() => {
    if (slug) execute(slug, {});
  }, [slug]);

  const { teams, price, tags } = courseDetailData || {};

  const modifiedProps = {
    ...courseDetailData,
    price: formatCurrency(price),
    teacher: teams?.find((item) => item.tags.includes(Roles.Teacher)),
  };

  // -----------Payment Method------
  const navigate = useNavigate();
  const {
    profile: courseProfile,
    courseInfo,
    handleGetProfileCourse,
    handleGetProfilePayment,
  } = useAuthen();

  const _onOrder = () => {
    const profileError = validate();

    if (Object.keys(profileError).length > 0) {
      console.log("Profile form validate failed", profileError);
    } else {
      if (paymentMethod) {
        // setup Payload
        const payload = {
          name: form?.name,
          phone: form?.phone,
          course: courseDetailData?.id,
          type: form.type,
          paymentMethod,
        };

        // Call API order
        orderCourse(payload, {
          onSuccess: async () => {
            message.success("Đăng ký thành công");
            await handleGetProfileCourse();
            await handleGetProfilePayment();
            navigate(PATHS.PROFILE.COURSES);
          },
          onFail: () => {
            message.error("Đăng ký thất bại");
          },
        });
      } else {
        message.error("Vui lòng chọn hình thức thanh toán");
      }
    }
  };

  // --------------Form Order --------------
  const { profile } = useAuthen();

  const {
    firstName: profileName,
    email: profileEmail,
    phone: profilePhone,
  } = profile || {};

  // Handle profile Form
  const { form, register, validate, setForm } = useForm(
    {
      name: "",
      email: "",
      phone: "",
      type: "",
    },
    {
      name: [requireRule("Hãy nhập họ tên")],
      email: [
        requireRule("Hãy nhập email"),
        regrexRule("Hãy nhập đúng định dạng "),
      ],
      phone: [
        requireRule("Hãy nhập sdt"),
        regrexRule("Hãy nhập đúng định dạng "),
      ],
      type: [requireRule("Chọn hình thức học")],
    }
  );

  useEffect(() => {
    setForm({
      name: profileName,
      email: profileEmail,
      phone: profilePhone,
      type: "",
    });
  }, [(profileName, profileEmail, profilePhone)]);

  return (
    <>
      <main className="mainwrapper --ptop">
        <section className="sccourseorder">
          <div className="container small">
            <InfoOrder {...modifiedProps} />
            <FormOrder register={register} tags={tags} />
            <PaymentOrder
              handleChange={handlePaymentMethodChange}
              selectedPayment={paymentMethod}
            />
            {/* addclass --processing khi bấm đăng ký */}
            <Button variant="primary" onClick={_onOrder}>
              <span>Đăng ký khoá học</span>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default CourseOrder;
