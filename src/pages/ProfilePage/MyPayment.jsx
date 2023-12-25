import React from "react";
import useQuery from "../../hooks/useQuery";
import { orderService } from "../../services/orderService";

const MyPayment = () => {
  const { data: paymentData, loading: paymentLoading } = useQuery(() =>
    orderService.getPaymentHistories()
  );

  return (
    <>
      {/* Lịch sử thanh thánh */}
      <div className="tab__content-item" style={{ display: "block" }}>
        <div className="itemhistory">
          <div className="name">Frontend Newbie</div>
          <div className="payment">Chuyển khoản</div>
          <div className="date">05/01/2022</div>
          <div className="money">4.500.000 VND</div>
        </div>
        <div className="itemhistory">
          <div className="name">Web Responsive</div>
          <div className="payment">Tiền mặt</div>
          <div className="date">14/07/2022</div>
          <div className="money">4.900.000 VND</div>
        </div>
      </div>
    </>
  );
};

export default MyPayment;
