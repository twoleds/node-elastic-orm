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

var SearchCommand = require('./search_command.js');

var CountCommand = module.exports = function (index, type, query, params) {
    SearchCommand.call(this, index, type, query, params);
};

CountCommand.prototype = Object.create(SearchCommand.prototype);
CountCommand.prototype.constructor = CountCommand;

CountCommand.prototype.execute = function (client) {
    var self = this;
    return new Promise(function (resolve, reject) {
        self._check();
        var path = "/" + self._index + "/" + self._type + "/_count";
        client.execute("POST", path, self._query, self._params)
            .then(JSON.parse)
            .then(function (result) {
                return result["count"];
            })
            .then(resolve).catch(reject);

    });
};
