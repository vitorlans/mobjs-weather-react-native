import axios from 'axios';
let API_KEY = 'fd4a039778ea7f4db2289eddb93a4c96';
 
let axiosInstance = axios.create({
  baseURL: 'http://api.openweathermap.org',
  timeout: 1000
});

let baseConfig = {
    latitude: 0,
    longitude: 0,
    units:"metric",
    language: 'pt',
    appId: API_KEY,
}

function buildPath(){
    return '/data/2.5/weather?' + 'lat='+baseConfig.latitude+'&lon='+baseConfig.longitude + '&units=' + baseConfig.units + '&lang=' + baseConfig.language + '&mode=json&APPID=' + baseConfig.appId;
}

function setCoordinate (latitude, longitude) {
    baseConfig.latitude = latitude;
    baseConfig.longitude =longitude;
}

export function getByCoord(latitude, longitude) {
	setCoordinate(latitude, longitude);

    if(!latitude )

    return axiosInstance.request({
        url: buildPath(),
        method: 'get',   
    }).then((response) => {
        
        return response.data;
    })

}