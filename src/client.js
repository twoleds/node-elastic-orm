// An alternative ElasticSearch client for NodeJS.
// Copyright (C) 2015  Jaroslav Kuba
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

var http = require("http");
var querystring = require("querystring");

var Client = module.exports = function (options) {
    this._options = options;
};

Client.prototype = Object.create(Object.prototype);
Client.prototype.constructor = Client;

Client.prototype.execute = function (method, path, data, params) {
    var self = this;
    return new Promise(function (resolve, reject) {

        if (typeof params === "object" && params !== null) {
            path += "?" + querystring.stringify(params);
        }

        var options = {
            "host": self._options.host,
            "port": self._options.port,
            "method": method,
            "path": path
        };

        var request = http.request(options, function (response) {
            var content = [];

            response.on("error", function (error) {
                reject(error);
            });

            response.on("data", function (data) {
                content.push(data);
            });

            response.on("end", function () {
                resolve(Buffer.concat(content).toString());
            });

        });

        request.on("error", function (error) {
            reject(error);
        });

        if (typeof data === "string" && data.length > 0) {
            request.write(data);
        }

        request.end();

    });
};
