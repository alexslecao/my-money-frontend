import Axios from "axios";

const BASE_URL = 'http://localhost:3005/api/billingCycles';

export function getList() {
    const request = Axios.get(`${BASE_URL}`);

    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
};