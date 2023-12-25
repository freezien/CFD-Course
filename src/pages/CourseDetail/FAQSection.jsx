import React from "react";
import Accordion from "../../components/Accordion";

const FAQSection = ({ from0to5, from6toend }) => {
  return (
    <>
      <section className="faq --scpadding">
        <div className="container">
          <div className="faq__inner">
            <div className="heading --noline --center">
              <h2 className="heading__title title --t2">
                Câu hỏi <span className="color--primary">thường gặp</span>
              </h2>
            </div>
            <div className="faq__list">
              <div className="accordion">
                <h3 className="accordion__title label">Thông tin chung</h3>
                {from0to5?.length > 0 &&
                  from0to5.map((items, index) => {
                    const list = {
                      title: items?.question,
                      description: items?.answer,
                    };
                    return <Accordion data={[list]} key={index} />;
                  })}
              </div>
              <div className="accordion">
                <h3 className="accordion__title label">Đăng ký, thanh toán</h3>
                {from6toend?.length > 0 &&
                  from6toend.map((item, index) => {
                    const list = {
                      title: item?.question,
                      description: item?.answer,
                    };
                    return <Accordion data={[list]} key={index} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
