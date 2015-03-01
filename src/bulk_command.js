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

var Command = require('./command.js');

var BulkCommand = module.exports = function (params) {
    Command.call(this, params);
    this._commands = [];
};

BulkCommand.prototype = Object.create(Command.prototype);
BulkCommand.prototype.constructor = BulkCommand;

BulkCommand.prototype.add = function (command) {
    var added = false;
    if (command instanceof Command && typeof command._bulk === "function") {
        this._commands.push(command);
        added = true;
    }
    return added;
};

BulkCommand.prototype.execute = function (client) {
    var self = this;
    return new Promise(function (resolve, reject) {
        if (self._commands.length == 0) {
            throw new Error("No commands to execute in bulk.");
        }
        var data = [];
        for (var i = 0; i < self._commands.length; i++) {
            self._commands[i]._bulk(data);
        }
        data.push("");
        client.execute("POST", "/_bulk", data.join("\n"), self._params)
            .then(JSON.parse)
            .then(resolve).catch(reject);
    });
};

BulkCommand.prototype.forEach = function (callback) {
    for (var i = 0; i < this._commands.length; i++) {
        callback.call(this, this._commands[i]);
    }
};

BulkCommand.prototype.remove = function (command) {
    var index = this._commands.indexOf(command);
    if (index >= 0) {
        this._commands.splice(index, 1);
        return true;
    }
    return false;
};
