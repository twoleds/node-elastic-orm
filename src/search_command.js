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

var TypeCommand = require('./type_command.js');

var SearchCommand = module.exports = function (index, type, query, params) {
    TypeCommand.call(this, index, type, params);
    this.setQuery(query);
};

SearchCommand.prototype = Object.create(TypeCommand.prototype);
SearchCommand.prototype.constructor = SearchCommand;

SearchCommand.prototype._check = function () {
    TypeCommand.prototype._check.call(this);
    if (this._query === null) {
        throw new Error("Invalid source of document.");
    }
};

SearchCommand.prototype.execute = function (client) {
    var self = this;
    return new Promise(function (resolve, reject) {
        self._check();
        var path = "/" + self._index + "/" + self._type + "/_search";
        client.execute("POST", path, self._query, self._params)
            .then(JSON.parse)
            .then(function (result) {
                return result["hits"];
            })
            .then(resolve).catch(reject);
    });
};

SearchCommand.prototype.getQuery = function () {
    return (this._query !== null) ? JSON.parse(this._query) : null;
};

SearchCommand.prototype.setQuery = function (query) {
    this._query = (typeof query === "object") ? JSON.stringify(query) : null;
};
