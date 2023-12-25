import { Skeleton } from "antd";
import React, { useEffect } from "react";

const TestimonialSection = ({ rates, loading }) => {
  useEffect(() => {
    // ================= TESTIMONIALS HOME ================
    function testimonialSlider() {
      if ($(".testimonial__slider").length) {
        var $carousel = $(".testimonial__slider .images .list").flickity({
          contain: true,
          wrapAround: false,
          freeScroll: false,
          cellAlign: "center",
          lazyLoad: 2,
          imagesLoaded: true,
          prevNextButtons: false,
          dragThreshold: 0,
          on: {
            ready: function () {
              let dotsSlideTes = $(".testimonial__slider .flickity-page-dots");
              let dotsNew = $(".testimonial__slider .dots");
              dotsSlideTes.appendTo(dotsNew);
            },
            change: function (index) {
              $(".testimonial__slider .ct").removeClass("active");
              $(".testimonial__slider .ct-" + (index + 1)).addClass("active");
            },
          },
        });
        var flkty = $carousel.data("flickity");
        var $imgs = $(".testimonial__slider .carousel-cell picture img");

        $carousel.on("scroll.flickity", function (event, progress) {
          flkty.slides.forEach(function (slide, i) {
            var img = $imgs[i];
            var x = ((slide.target + flkty.x) * -1) / 2;
            img.style.transform = "translateX( " + x + "px)";
          });
        });

        let ctrPrevTes = $(".testimonial .control .control__prev"),
          ctrNextTes = $(".testimonial .control .control__next");

        ctrPrevTes.on("click", function () {
          $carousel.flickity("previous", true);
        });
        ctrNextTes.on("click", function () {
          $carousel.flickity("next", true);
        });
      }
    }

    const myTimeout = setTimeout(() => {
      testimonialSlider();
    }, 300);

    return () => {
      clearTimeout(myTimeout);
    };
  }, [rates]);

  return (
    <>
      <section className="testimonial --scpadding">
        <div className="container">
          <div className="testimonial__inner">
            <div className="heading --white">
              <h2 className="heading__title title --t2 --white">
                Cảm nhận <span className="color--primary">học viên</span>
              </h2>
              <div className="control">
                <div className="control__prev">
                  <svg
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 39L15 24L30 9"
                      stroke="#fff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="control__next">
                  <svg
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 39L15 24L30 9"
                      stroke="#fff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="testimonial__slider">
              <div className="testimonial__slider-list">
                <div className="item">
                  <div className="text">
                    {!loading && rates?.length === 0 ? (
                      <Skeleton
                        style={{
                          width: "420px",
                          height: "420px",
                          margin: "0 auto",
                        }}
                      />
                    ) : (
                      rates?.length > 0 &&
                      rates.map((rate, index) => {
                        return (
                          <div
                            className={`ct ct-${index + 1} active`}
                            key={index}
                          >
                            <div className="info">
                              <div className="name">
                                <h4 className="title --t3 --white">
                                  {rate.name}
                                </h4>
                              </div>
                            </div>
                            <div className="content">{rate.description}</div>
                            <div className="bottom">
                              <span className="label">{rate.tag}</span>
                              <a
                                href="https://www.facebook.com/"
                                target="_blank"
                              >
                                <img src="/img/facebook.svg" alt="" />
                              </a>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>

                  <div className="images">
                    <div className="list">
                      {rates?.length > 0 &&
                        rates.map((rate, index) => {
                          return (
                            <div className="carousel-cell" key={index}>
                              <div className="img">
                                <picture>
                                  <source
                                    media="(max-width: 767px)"
                                    srcSet={rate.image}
                                  />
                                  <img
                                    data-flickity-lazyload={rate.image}
                                    alt=""
                                  />
                                </picture>
                              </div>
                              <div className="ct_m">
                                <div className="info">
                                  <div className="name">
                                    <h4 className="title --t3 --white">
                                      {rate.name}
                                    </h4>
                                  </div>
                                </div>
                                <div className="content">
                                  {rate.description}
                                </div>
                                <div className="bottom">
                                  <span className="label">{rate.tag}</span>
                                  <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                  >
                                    <img src="/img/facebook.svg" alt="" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div className="dots" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
