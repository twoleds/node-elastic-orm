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

var TypeCommand = require("./type_command.js");

var MultiFetchCommand = module.exports = function (index, type, ids, params) {
    TypeCommand.call(this, index, type, params);
    this.setIds(ids);
};

MultiFetchCommand.prototype = Object.create(TypeCommand.prototype);
MultiFetchCommand.prototype.constructor = MultiFetchCommand;

MultiFetchCommand.prototype._check = function () {
    TypeCommand.prototype._check.call(this);
    if (this._ids === null) {
        throw new Error("Invalid identifiers of documents.");
    }
};

MultiFetchCommand.prototype.getIds = function () {
    return this._ids !== null ? JSON.parse(this._ids) : null;
};

MultiFetchCommand.prototype.setIds = function (ids) {
    this._ids = (ids instanceof Array) ? JSON.stringify(ids) : null;
};

MultiFetchCommand.prototype.execute = function (client) {
    var self = this;
    return new Promise(function (resolve, reject) {
        self._check();
        var path = "/" + self._index + "/" + self._type + "/_mget";
        var data = "{\"ids\":" + self._ids + "}";
        client.execute("POST", path, data, self._params)
            .then(JSON.parse)
            .then(function (result) {
                return result["docs"];
            })
            .then(resolve).catch(reject);
    });
};
