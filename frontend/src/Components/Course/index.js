import React from 'react';
import { withRouter } from 'react-router-dom';
import TabName from '../../Container/CourseByCategories/TabName';
const Course = () => {

    return (
        <>
            <section className="myCourse">
                <div className="course_content">
                    <h3>Các khóa học vô cùng đa dạng</h3>
                    <div className="myTab">
                        <TabName />
                    </div>
                </div>
            </section>
        </>
    );
};

export default withRouter(Course);