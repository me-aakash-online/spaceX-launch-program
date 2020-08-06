import React from 'react';
import PropTypes from 'prop-types';
import './filters.scss';

const FilterButton = ({ title, isChecked, onClick, ..._ }) => {
    const getClick = () => {
        onClick(title);
    };

    return (
        <div
            className={`checkbox-list__item ${
                isChecked ? 'checkbox-list__item--pressed' : ''
            }`}
            onClick={getClick}
        >
            <span>{title}</span>
        </div>
    );
};

FilterButton.propTypes = {
    title: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    onClick: PropTypes.func,
};

export default FilterButton;
