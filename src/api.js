
import config from "./config";

const apiGetNextLoopUrl = () => {
    return fetch(config.apiBaseUrl + '/loop').then(data => data.json()).then(data => data.url);
};

export {
    apiGetNextLoopUrl,
};