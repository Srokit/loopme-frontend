
import config from "./config";

const apiGetNextLoop = (loopIndexForGetCall) => {
    return fetch(config.apiBaseUrl + '/loop').then(data => data.json()).then(data => data);
};

export {
    apiGetNextLoop,
};