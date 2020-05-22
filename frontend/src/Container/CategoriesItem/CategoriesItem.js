import React, { Fragment } from 'react'
// import PropTypes from 'prop-types'

const CategoriesItem = ({ cate }) => {
  return (
    <Fragment>
      <div className="col-md-4">
        <div className="categories_item">
          <a href="sdfg">
            <i className="fa fa-code" />
            <span>{cate.categoriesName}</span>
          </a>
        </div>
      </div>
    </Fragment>
  )
}


export default CategoriesItem
