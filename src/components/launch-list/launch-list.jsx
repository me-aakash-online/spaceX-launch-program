import React from 'react';
import './launches.scss';
import LaunchItem from './launch-item';
import axios from 'axios';
import MESSAGES from '../../globals/constants/messages';
import { getLaunches } from '../../services';

const LaunchList = ({ filters: { year, successLand, successLaunch } }) => {
    const [launchListStatus, setLaunchListStatus] = React.useState({
        launchList: [],
        isLoading: false,
        hasError: '',
    });

    React.useEffect(() => {
        setLaunchListStatus({
            ...launchListStatus,
            isLoading: true,
            launchList: [],
            hasError: '',
        });
        getLaunches(year, successLand, successLaunch)
            .then((resp) => {
                const data = resp.data;
                setLaunchListStatus({
                    ...launchListStatus,
                    isLoading: false,
                    launchList: data.length ? data : [],
                    hasError: data.length ? false : MESSAGES.noItemsFounds,
                });
            })
            .catch((err) => {
                handleError(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [year, successLand, successLaunch]);

    const handleError = (err) => {
        if (axios.isCancel(err)) {
            setLaunchListStatus({
                ...launchListStatus,
                isLoading: false,
                hasError: MESSAGES.requestCancelled,
            });
        } else {
            if (!navigator.onLine) {
                setLaunchListStatus({
                    ...launchListStatus,
                    isLoading: false,
                    hasError: MESSAGES.offline,
                });
            } else {
                setLaunchListStatus({
                    ...launchListStatus,
                    isLoading: false,
                    hasError: MESSAGES.serverError,
                });
            }
        }
    };

    return (
        <section className="launch-list-wrapper">
            <div className="launch-list">
                {launchListStatus.isLoading && <p>{MESSAGES.loading}</p>}
                {!launchListStatus.isLoading && !launchListStatus.hasError ? (
                    launchListStatus.launchList.map((launch) => (
                        <LaunchItem
                            key={
                                launch.mission_name +
                                launch.flight_number.toString()
                            }
                            src={launch.links.mission_patch_small}
                            missionName={launch.mission_name}
                            flightNumber={launch.flight_number.toString()}
                            missionIds={launch.mission_id}
                            launchYear={launch.launch_year}
                            landSuccess={
                                launch.rocket.first_stage.cores[0].land_success
                            }
                            launchSuccess={launch.launch_success}
                        />
                    ))
                ) : (
                    <p>{launchListStatus.hasError}</p>
                )}
            </div>
        </section>
    );
};

export default LaunchList;
