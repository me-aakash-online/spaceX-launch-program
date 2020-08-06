import React from 'react';
import FilterButton from './button';
import LABELS from '../../globals/constants/labels';
import FILTER_VALUES from '../../globals/constants/filterValues';

const LaunchStatus = ({ updateSuccessLaunch }) => {
    const didMount = React.useRef(false);
    const [status, setStatus] = React.useState(FILTER_VALUES.none);

    React.useEffect(() => {
        if (didMount.current) {
            updateSuccessLaunch(status);
        } else {
            didMount.current = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    const handleStatusChange = (update) => {
        if (update === status) {
            setStatus(FILTER_VALUES.none);
        } else {
            setStatus(update);
        }
    };

    return (
        <div className="sub-filter">
            <span className="sub-filter__text">
                {LABELS.filter.launchSuccess}
            </span>
            <p className="divider" />
            <div className="checkbox-list">
                <FilterButton
                    title={FILTER_VALUES.true}
                    isChecked={status === FILTER_VALUES.true}
                    onClick={handleStatusChange}
                />
                <FilterButton
                    title={FILTER_VALUES.false}
                    isChecked={status === FILTER_VALUES.false}
                    onClick={handleStatusChange}
                />
            </div>
        </div>
    );
};

export default LaunchStatus;
