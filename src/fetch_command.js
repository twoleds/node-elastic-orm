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

var DocumentCommand = require('./document_command.js');

var FetchCommand = module.exports = function (index, type, id, params) {
    DocumentCommand.call(this, index, type, id, params);
};

FetchCommand.prototype = Object.create(DocumentCommand.prototype);
FetchCommand.prototype.constructor = FetchCommand;

FetchCommand.prototype.execute = function (client) {
    var self = this;
    return new Promise(function (resolve, reject) {
        self._check();
        var path = "/" + self._index + "/" + self._type + "/" + self._id;
        client.execute("GET", path, null, self._params)
            .then(JSON.parse)
            .then(resolve).catch(reject);
    });
};
