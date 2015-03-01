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

var IndexCommand = require("./index_command.js");

var CreateIndexCommand = module.exports = function (index, settings, params) {
    IndexCommand.call(this, index, params);
    this.setSettings(settings);
};

CreateIndexCommand.prototype = Object.create(IndexCommand.prototype);
CreateIndexCommand.prototype.constructor = CreateIndexCommand;

CreateIndexCommand.prototype._check = function () {
    IndexCommand.prototype._check.call(this);
    if (this._settings === null) {
        throw new Error("Invalid settings of index.");
    }
};

CreateIndexCommand.prototype.execute = function (client) {
    var self = this;
    return new Promise(function (resolve, reject) {
        self._check();
        var path = "/" + self._index;
        var data = "{\"settings\":" + self._settings + "}";
        client.execute("PUT", path, data, self._params)
            .then(JSON.parse)
            .then(resolve).catch(reject);
    });
};

CreateIndexCommand.prototype.getSettings = function () {
    return this._settings !== null ? JSON.parse(this._settings) : null;
};

CreateIndexCommand.prototype.setSettings = function (settings) {
    if (typeof settings === "object" && settings !== null) {
        this._settings = JSON.stringify(settings);
    }
    else {
        this._settings = null;
    }
};

