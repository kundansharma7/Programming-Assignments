angular.module('httpApp', [])
        .service('httpService', ['$http', '$q', function ($http, $q) {
                //this.oauth2Root = "/node";
                var conf = {};
                var apiCall = {};
                var d;
                var data, header;
                this.baseUrl = "http://localhost:3000/";
                this.get = function (url, getHeader, params) {   // $http.get(url, config)    
                    // config is optional always
                    apiCall = {};
                    var tempUrl = url;
                    header = getHeader;
                    d = $q.defer();
                    url = this.baseUrl + tempUrl;
                    var req = {
                        method: 'GET',
                        url: url,
                        params: params,
                        headers: getHeader
                    };
                    d.promise = $http(req).then(function (data)
                    {
                        d.resolve(data);
                    }).catch(function (err)
                    {
                        d.reject(err);
                    });
                    return d.promise;
                };
                this.post = function (url, postDat, postHeader, params) {
                    apiCall = {};
                    var tempUrl = url;
                    data = postDat;
                    header = postHeader;
                    d = $q.defer();
                    url = this.baseUrl + tempUrl;
                    console.log("Base url:::", data)
                    var req = {
                        method: 'post',
                        url: url,
                        data: data,
                        params: params,
                        headers: postHeader
                    };
                    d.promise = $http(req).then(function (data)
                    {
                    	console.log(data)
                        d.resolve(data.result);
                    }).catch(function (err)
                    {
                    	console.log("catch", err)
                        d.reject(err);
                    });
                    return d.promise;
                };
                this.put = function (url, putData, putHeader, params) {
                    apiCall = {};
                    var tempUrl = url;
                    data = putData;
                    header = putHeader;
                    d = $q.defer();
                    url = this.baseUrl + tempUrl;
                    var req = {
                        method: 'put',
                        url: url,
                        data: putData,
                        params: params,
                        headers: putHeader
                    };
                    d.promise = $http(req).then(function (data)
                    {
                        d.resolve(data.result);
                        //console.log("AverageBill: " + data.result);
                    }).catch(function (err)
                    {
                        d.reject(err);
                    });
                    return d.promise;
                };
                this.delete = function (url, delData, delHeader, params) {
                };
            }]);