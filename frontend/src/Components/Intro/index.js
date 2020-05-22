import React from 'react';

const Intro = () => {
    return (
        <>
            <section className="intro">
                <div className="intro_content">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="intro_item d-flex">
                                <div className="icon">
                                    <i className="fa fa-bullseye" />
                                </div>
                                <div className="icon_content">
                                    <p>
                                        MỤC TIÊU ĐI ĐẦU
                                    </p>
                                    <p>Cụ thể hóa mục tiêu</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="intro_item d-flex">
                                <div className="icon">
                                    <i className="fa fa-spinner" />
                                </div>
                                <div className="icon_content">
                                    <p>
                                        LỘ TRÌNH RÕ RÀNG
                                    </p>
                                    <p>Phát triển năng lực và đam mê</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="intro_item d-flex">
                                <div className="icon">
                                    <i className="fa fa-sync"></i>
                                </div>
                                <div className="icon_content">
                                    <p>
                                        HỖ TRỢ LIÊN TỤC
                                    </p>
                                    <p>Nhóm chat với hàng ngàn thành viên</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Intro;