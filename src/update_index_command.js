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

var CreateIndexCommand = require("./create_index_command.js");

var UpdateIndexCommand = module.exports = function (index, settings, params) {
    CreateIndexCommand.call(this, index, settings, params);
};

UpdateIndexCommand.prototype = Object.create(CreateIndexCommand.prototype);
UpdateIndexCommand.prototype.constructor = UpdateIndexCommand;

UpdateIndexCommand.prototype.execute = function (client) {
    var self = this;
    return new Promise(function (resolve, reject) {
        self._check();
        var path = "/" + self._index + "/_settings";
        client.execute("PUT", path, self._settings, self._params)
            .then(JSON.parse)
            .then(resolve).catch(reject);
    });
};
