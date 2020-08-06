import React from 'react';
import './launches.scss';
import PropTypes from 'prop-types';
import LABELS from '../../globals/constants/labels';

const LaunchItem = ({
    src,
    missionName,
    flightNumber,
    missionIds,
    launchYear,
    launchSuccess,
    landSuccess,
}) => {
    return (
        <div className="launch-list__item">
            <img
                className="launch-list__item__avatar"
                src={src}
                alt="mission-patch"
            />
            <h3 className="launch-list__item__title">{`${missionName} #${flightNumber}`}</h3>
            <div className="launch-list__item__list">
                <h3 className="subtitle__header">
                    {LABELS.launchItem.missionIds}
                </h3>
                <ul className="subtitle_list">
                    {missionIds.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="launch-list__item__subtitle">
                <h3 className="subtitle__header">
                    {LABELS.launchItem.launchYear}
                </h3>
                <p className="subtitle__text">{launchYear}</p>
            </div>
            <div className="launch-list__item__subtitle">
                <h3 className="subtitle__header">
                    {LABELS.launchItem.launchSuccess}
                </h3>
                <p className="subtitle__text">
                    {typeof launchSuccess !== 'object'
                        ? launchSuccess.toString()
                        : 'Unknown'}
                </p>
            </div>
            <div className="launch-list__item__subtitle">
                <h3 className="subtitle__header">
                    {LABELS.launchItem.landSuccess}
                </h3>
                <p className="subtitle__text">
                    {typeof landSuccess !== 'object'
                        ? landSuccess.toString()
                        : 'Unknown'}
                </p>
            </div>
        </div>
    );
};

LaunchItem.propTypes = {
    src: PropTypes.string.isRequired,
    missionName: PropTypes.string.isRequired,
    flightNumber: PropTypes.string.isRequired,
    missionIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    launchYear: PropTypes.string.isRequired,
    launchSuccess: PropTypes.bool.isRequired,
    landSuccess: PropTypes.bool.isRequired,
};

export default LaunchItem;
