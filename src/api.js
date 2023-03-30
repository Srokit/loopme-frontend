
import config from "./config";

const apiGetNextLoop = () => {
    return fetch(config.apiBaseUrl + '/loop').then(data => data.json()).then(data => data);
};

export {
    apiGetNextLoop,
};