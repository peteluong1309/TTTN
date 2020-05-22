import React from 'react';
import Slider from 'react-slick';
import avatar from '../../Asset/img/91833942-man-avatar-icon-flat-illustration-of-man-avatar-vector-icon-isolated-on-white-background.jpg';

const Opinion = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // arrows: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className="myOpinion">
                <div className="opinion_content">
                    <h3>Cảm nhận của học viên</h3>
                    <div className="mb-3">
                        <Slider {...settings} className="mb-5">
                            <div className="card">
                                <div className="card-contain">

                                    <div className="card-header student-info">
                                        <img src={avatar} alt="gsf" width={64} height={64} />
                                        <p>Tuấn Phạm</p>
                                    </div>
                                    <div className="card-body">
                                        <p >
                                            Thực sự em cảm thấy sự nhiệt tình của giảng viên thông qua bài giảng, thầy dạy rất chi tiết mà còn vui tính nữa. Chúc website ngày càng phát triển và có nhiều khóa học hơn ^^
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-contain">

                                    <div className="card-header student-info">
                                        <img src={avatar} alt="gsf" width={64} height={64} />
                                        <p>Tuấn Phạm</p>
                                    </div>
                                    <div className="card-body">
                                        <p >
                                            Thực sự em cảm thấy sự nhiệt tình của giảng viên thông qua bài giảng, thầy dạy rất chi tiết mà còn vui tính nữa. Chúc website ngày càng phát triển và có nhiều khóa học hơn ^^
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-contain">

                                    <div className="card-header student-info">
                                        <img src={avatar} alt="gsf" width={64} height={64} />
                                        <p>Tuấn Phạm</p>
                                    </div>
                                    <div className="card-body">
                                        <p >
                                            Thực sự em cảm thấy sự nhiệt tình của giảng viên thông qua bài giảng, thầy dạy rất chi tiết mà còn vui tính nữa. Chúc website ngày càng phát triển và có nhiều khóa học hơn ^^
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-contain">

                                    <div className="card-header student-info">
                                        <img src={avatar} alt="gsf" width={64} height={64} />
                                        <p>Tuấn Phạm</p>
                                    </div>
                                    <div className="card-body">
                                        <p >
                                            Thực sự em cảm thấy sự nhiệt tình của giảng viên thông qua bài giảng, thầy dạy rất chi tiết mà còn vui tính nữa. Chúc website ngày càng phát triển và có nhiều khóa học hơn ^^
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-contain">

                                    <div className="card-header student-info">
                                        <img src={avatar} alt="gsf" width={64} height={64} />
                                        <p>Tuấn Phạm</p>
                                    </div>
                                    <div className="card-body">
                                        <p >
                                            Thực sự em cảm thấy sự nhiệt tình của giảng viên thông qua bài giảng, thầy dạy rất chi tiết mà còn vui tính nữa. Chúc website ngày càng phát triển và có nhiều khóa học hơn ^^
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-contain">

                                    <div className="card-header student-info">
                                        <img src={avatar} alt="gsf" width={64} height={64} />
                                        <p>Tuấn Phạm</p>
                                    </div>
                                    <div className="card-body">
                                        <p >
                                            Thực sự em cảm thấy sự nhiệt tình của giảng viên thông qua bài giảng, thầy dạy rất chi tiết mà còn vui tính nữa. Chúc website ngày càng phát triển và có nhiều khóa học hơn ^^
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    {/* <div class="company">
      <div class="company_logo">
        <p>
            Trusted by companies of all sizes
        </p>
        <div class="logo">
          <div class="row">
            <div class="col-md-2">
              <a href="#">
                <img src="./img/booking.svg" alt="">
              </a>
            </div>
            <div class="col-md-2">
                <a href="#">
                  <img src="./img/volkswagen.svg" alt="">
                </a>
            </div>
            <div class="col-md-2">
                <a href="#">
                  <img src="./img/mercedes.svg" alt="">
                </a>
            </div>
            <div class="col-md-2">
              <a href="#">
                <img src="./img/pinterest.svg" alt="">
              </a>
            </div>
            <div class="col-md-2">
              <a href="#">
                <img src="./img/adidas.svg" alt="">
              </a>
            </div>
            <div class="col-md-2">
              <a href="#">
                <img src="./img/paypal.svg" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> */}
                </div>
            </section>
        </>
    );
};

export default Opinion;