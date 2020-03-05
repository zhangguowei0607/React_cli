export const SET_CURRENT_CITY = "index/set_current_city";
var proxy = "/apis";
export const loadGetCityDate = (callBack) => { // 获取城市的接口
    // https://api.juooo.com /city/city/getSortedCityList?version=6.1.1&referer=2
    fetch(proxy + "/city/city/getSortedCityList?version=6.1.1&referer=2", {
            method: "GET"
        })
        .then(data => {
            return data.json();
        })
        .then(res => {
            callBack(res);
        });
};

export const loadGetHotCityDate = (callBack) => { // 获取热门城市的接口
    // https://api.juooo.com /city/city/getHotCityList?version=6.1.1&referer=2
    fetch(proxy + "/city/city/getHotCityList?version=6.1.1&referer=2", {
            method: "GET"
        })
        .then(data => {
            return data.json();
        })
        .then(res => {
            callBack(res);
        });
};

export const loadGetTopSectionCityDate = (temp,callBack) => { // 获取轮播图数据的接口
    // https://api.juooo.com /home/index/getClassifyHome? city_id=0 & abbreviation= &version=6.1.1&referer=2
    fetch(proxy + `/home/index/getClassifyHome?city_id=${temp.city_id}&abbreviation=${temp.abbreviation}&version=6.1.1&referer=2`, {
            method: "GET"
        })
        .then(data => {
            return data.json();
        })
        .then(res => {
            callBack(res);
        });
};

export const loadGetHotShowDate = (temp,callBack) => { // 获取热门演出的接口
    // https://api.juooo.com /home/index/getHotsRecommendList? city_id=0 &version=6.1.1&referer=2
    fetch(proxy + `/home/index/getHotsRecommendList?city_id=${temp.city_id}&version=6.1.1&referer=2`, {
            method: "GET"
        })
        .then(data => {
            return data.json();
        })
        .then(res => {
            callBack(res);
        });
};

export const loadGetConcertDate = (temp,callBack) => { // 获取演唱会的接口
    // https://api.juooo.com /home/index/getFloorShow? city_id=0 &version=6.1.1&referer=2
    fetch(proxy + `/home/index/getFloorShow?city_id=${temp.city_id}&version=6.1.1&referer=2`, {
            method: "GET"
        })
        .then(data => {
            return data.json();
        })
        .then(res => {
            callBack(res);
        });
};

export const loadGetSearchDate = (temp,callBack) => { // 获取搜索的接口
    // https://api.juooo.com /Show/Search/getShowList?city_id=&category=&keywords=戏剧&venue_id=&start_time=&page=1&referer_type=&version=6.1.1&referer=2
    fetch(proxy + `/Show/Search/getShowList?city_id=&category=&keywords=${temp}&venue_id=&start_time=&page=1&referer_type=&version=6.1.1&referer=2`, {
            method: "GET"
        })
        .then(data => {
            return data.json();
        })
        .then(res => {
            callBack(res);
        });
};

export const loadGetHotSearchDate = (callBack) => { // 获取热门搜索的接口
    // https://api.juooo.com /Show/Search/getNewHotWord?version=6.1.1&referer=2
    fetch(proxy + `/Show/Search/getNewHotWord?version=6.1.1&referer=2`, {
            method: "GET"
        })
        .then(data => {
            return data.json();
        })
        .then(res => {
            callBack(res);
        });
};

export const loadGetNominateDate = (temp,callBack) => { // 获取为你推荐的接口
    // https://api.juooo.com /Show/Search/getShowList?city_id=0&category=&keywords=&venue_id=&start_time=&page=1&referer_type=index&version=6.1.1&referer=2
    fetch(proxy + `/Show/Search/getShowList?city_id=${temp.city_id}&category=&keywords=&venue_id=&start_time=&page=1&referer_type=index&version=6.1.1&referer=2`, {
            method: "GET"
        })
        .then(data => {
            return data.json();
        })
        .then(res => {
            callBack(res);
        });
};