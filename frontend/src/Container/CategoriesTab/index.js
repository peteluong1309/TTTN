import React, { Component } from 'react'

export default class CategoriesTab extends Component {
    render() {
        const {elmprops} = this.props;
        return (
            <>
                <a className="nav-link active" data-toggle="tab" href="#development">{elmprops.tenDanhMuc}</a>
            </>
        )
    }
}
