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

var StoreCommand = require('./store_command.js');

var CreateCommand = module.exports = function (index, type, id, source, params) {
    StoreCommand.call(this, index, type, id, source, params);
};

CreateCommand.prototype = Object.create(StoreCommand.prototype);
CreateCommand.prototype.constructor = CreateCommand;

CreateCommand.prototype._bulk = function (buffer) {
    this._check();
    buffer.push(JSON.stringify({
        "create": {
            "_index": this._index,
            "_type": this._type,
            "_id": this._id
        }
    }));
    buffer.push(this._source);
};

CreateCommand.prototype.execute = function (client) {
    var self = this;
    return new Promise(function (resolve, reject) {
        self._check();
	    var path = "/" + self._index + "/" + self._type + "/" + self._id + "/_create";
        client.execute("POST", path, self._source, self._params)
            .then(JSON.parse)
            .then(resolve).catch(reject);
    });
};
