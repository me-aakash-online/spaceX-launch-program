import axios from 'axios';
import { ACTUAL_VALUES } from '../globals/constants/filterValues';
import endpoints from '../globals/constants/endpoints';

let source = axios.CancelToken.source();

const getLaunches = (year, successLand, successLaunch) => {
    source.cancel();
    source = axios.CancelToken.source();
    return axios.get(endpoints.launches, {
        params: {
            launch_year: year || undefined,
            land_success: ACTUAL_VALUES[successLand] || undefined,
            launch_success: ACTUAL_VALUES[successLaunch] || undefined,
        },
        cancelToken: source.token,
        timeout: 7000,
    });
};

export { getLaunches };
