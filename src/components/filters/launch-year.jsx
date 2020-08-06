import React from 'react';
import FilterButton from './button';
import LaunchYears from '../../globals/constants/yearFilters';
import LABELS from '../../globals/constants/labels';
import FILTER_VALUES from '../../globals/constants/filterValues';

const LaunchYear = ({ updateYears }) => {
    const didMount = React.useRef(false);
    const [selectedYear, setSelectedYear] = React.useState(FILTER_VALUES.none);

    React.useEffect(() => {
        if (didMount.current) {
            updateYears(selectedYear);
        } else {
            didMount.current = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedYear]);

    const handleClick = (year) => {
        if (selectedYear === year) {
            setSelectedYear(FILTER_VALUES.none);
        } else {
            setSelectedYear(year);
        }
    };

    return (
        <div className="sub-filter">
            <span className="sub-filter__text">{LABELS.filter.year}</span>
            <p className="divider" />
            <div className="checkbox-list">
                {LaunchYears.map((year) => (
                    <FilterButton
                        key={year}
                        title={year}
                        isChecked={selectedYear === year}
                        onClick={handleClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default LaunchYear;
