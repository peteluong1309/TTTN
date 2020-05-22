import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCourseCategoriesList } from '../../../Action/courses';
// import { Link } from 'react-router-dom';
import TabpaneItem from '../TabpaneItem';
import PropTypes from 'prop-types';


const TabName = ({ getCourseCategoriesList, cateList }) => {

    const [chosenCategory, setChosenCategory] = useState('FrontEnd');

    useEffect(() => {
        getCourseCategoriesList();
    }, []);


    return (
        <>
            <ul className="nav nav-tabs">

                {cateList.map((cate, index) => {
                    return (
                        <li className="nav-item" key={index} onClick={() => setChosenCategory(cate.categoriesID)}>
                            <a className={`nav-link ${chosenCategory === cate.categoriesID ?
                                "active" : ""}`} data-toggle="pill"
                                href={cate.categoriesID}
                            >{cate.categoriesName}</a>
                        </li>
                    );
                })}
            </ul>
            <TabpaneItem chosenCate={chosenCategory} />
        </>
    )


}

TabName.propTypes = {
    cateList: PropTypes.array.isRequired,
    getCourseCategoriesList: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
    return {
        cateList: state.categoryList,
    }
}

export default connect(mapStateToProps, { getCourseCategoriesList })(TabName);