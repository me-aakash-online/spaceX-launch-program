import React from 'react';
import './App.scss';
import Labels from './globals/constants/labels';
import Filters from './components/filters/filters';
import LaunchList from './components/launch-list/launch-list';
import FILTER_VALUES from './globals/constants/filterValues';

const initialState = {
    year: FILTER_VALUES.none,
    successLand: FILTER_VALUES.none,
    successLaunch: FILTER_VALUES.none,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_YEARS':
            return {
                ...state,
                year: action.payload.year,
            };
        case 'UPDATE_SUCCESS_LAUNCH':
            return {
                ...state,
                successLaunch: action.payload.successLaunch,
            };
        case 'UPDATE_SUCCESS_LAND':
            return {
                ...state,
                successLand: action.payload.successLand,
            };
        default:
            return {
                ...state,
            };
    }
};

function App() {
    const [filters, dispatch] = React.useReducer(reducer, initialState);

    const handleUpdateYears = (year) => {
        dispatch({
            type: 'UPDATE_YEARS',
            payload: {
                year,
            },
        });
    };

    const handleUpdateSuccessLaunch = (successLaunch) => {
        dispatch({
            type: 'UPDATE_SUCCESS_LAUNCH',
            payload: {
                successLaunch,
            },
        });
    };

    const handleUpdateSuccessLand = (successLand) => {
        dispatch({
            type: 'UPDATE_SUCCESS_LAND',
            payload: {
                successLand,
            },
        });
    };

    return (
        <React.Fragment>
            <header className="page-title">
                <h1 className="page-title__text">{Labels.header}</h1>
            </header>
            <section className="page-content">
                <Filters
                    updateYears={handleUpdateYears}
                    updateSuccessLaunch={handleUpdateSuccessLaunch}
                    updateSuccessLand={handleUpdateSuccessLand}
                />
                <LaunchList filters={filters} />
            </section>
            <section className="filler" />
            <footer className="page-footer">
                <p className="page-footer__text">Developed by:</p>
                <p className="page-footer__name">{Labels.developer}</p>
            </footer>
        </React.Fragment>
    );
}

export default App;
