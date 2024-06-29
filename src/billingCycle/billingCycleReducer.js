const INICIAL_STATE = [];

export default (state = INICIAL_STATE, action) => {
    switch (action.type) {
        case 'BILLING_CYCLES_FETCHED':
            return action.payload.data;
        default:
            return state;
    }
}