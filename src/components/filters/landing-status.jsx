import React from 'react';
import FilterButton from './button';
import LABELS from '../../globals/constants/labels';
import VALUES from '../../globals/constants/filterValues';

const LandingStatus = ({ updateSuccessLand }) => {
    const didMount = React.useRef(false);
    const [status, setStatus] = React.useState(VALUES.none);

    React.useEffect(() => {
        if (didMount.current) {
            updateSuccessLand(status);
        } else {
            didMount.current = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    const handleStatusChange = (update) => {
        if (update === status) {
            setStatus(VALUES.none);
        } else {
            setStatus(update);
        }
    };

    return (
        <div className="sub-filter">
            <span className="sub-filter__text">
                {LABELS.filter.landSuccess}
            </span>
            <p className="divider" />
            <div className="checkbox-list">
                <FilterButton
                    title={VALUES.true}
                    isChecked={status === VALUES.true}
                    onClick={handleStatusChange}
                />
                <FilterButton
                    title={VALUES.false}
                    isChecked={status === VALUES.false}
                    onClick={handleStatusChange}
                />
            </div>
        </div>
    );
};

export default LandingStatus;
