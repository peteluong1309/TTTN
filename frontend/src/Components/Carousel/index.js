import React from 'react';

const Carousel = () => {
    return (
        <>
            <section className="carousel">
                <div className="carousel_content">
                    <h1>Learn on your schedule</h1>
                    <p>
                        Study any topic, anytime. Explore thousands of courses for as low as
                        $19.99
                    </p>
                    {/* <div className="input">
                        <form>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="What do you want to learn?" />
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-search" />
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div> */}
                </div>
            </section>

        </>
    );
};

export default Carousel;