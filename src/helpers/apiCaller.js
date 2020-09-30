import axios from 'axios';

export default function callApi(url, endpoint, method = 'GET', body){
    return axios({
        method: method,
        url: `${url}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
};