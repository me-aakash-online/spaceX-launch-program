import React from 'react';
import LaunchYear from './launch-year';
import './filters.scss';
import LaunchStatus from './launch-status';
import LandingStatus from './landing-status';

const Filters = ({ updateYears, updateSuccessLaunch, updateSuccessLand }) => {
    const handleYearsUpdate = (years) => {
        updateYears(years);
    };

    const handleSuccessfulLaunchUpdate = (status) => {
        updateSuccessLaunch(status);
    };

    const handleSuccessfulLandUpdate = (status) => {
        updateSuccessLand(status);
    };

    return (
        <aside className="page-filters">
            <h2 className="page-filters__header">Filters</h2>
            <LaunchYear updateYears={handleYearsUpdate} />
            <LaunchStatus updateSuccessLaunch={handleSuccessfulLaunchUpdate} />
            <LandingStatus updateSuccessLand={handleSuccessfulLandUpdate} />
        </aside>
    );
};

export default Filters;
