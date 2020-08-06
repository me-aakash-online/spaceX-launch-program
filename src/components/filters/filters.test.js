import React from 'react';
import { render } from '@testing-library/react';
import Filters from './filters';
import LABELS from '../../globals/constants/labels';
import FILTER_VALUES from '../../globals/constants/filterValues';

test('renders filter labels', () => {
    const { getByText } = render(<Filters />);
    const linkElement = getByText(LABELS.filter.year);
    expect(linkElement).toBeInTheDocument();
});

test('renders filter static data', () => {
    const { getAllByText } = render(<Filters />);
    const linkElement = getAllByText(FILTER_VALUES.false);
    expect(linkElement[0]).toBeInTheDocument();
});
