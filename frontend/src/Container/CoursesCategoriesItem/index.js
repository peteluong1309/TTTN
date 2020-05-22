import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class CoursesCategoriesItem extends Component {
    render() {
        const { cate } = this.props;
        return (
            <>
                <Link className="dropdown-item" to={`/categories/${cate.categoriesID}`}>{cate.categoriesName}</Link>
            </>
        )
    }
}
