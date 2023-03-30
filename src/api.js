
import config from "./config";

const apiGetNextLoop = (loopIndexForGetCall) => {
    return fetch(config.apiBaseUrl + '/loop?last_loop=' + loopIndexForGetCall).then(data => data.json()).then(data => data);
};

export {
    apiGetNextLoop,
};