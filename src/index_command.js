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

var IndexCommand = module.exports = function (index, params) {
    Command.call(this, params);
    this.setIndex(index);
};

IndexCommand.prototype = Object.create(Command.prototype);
IndexCommand.prototype.constructor = IndexCommand;

IndexCommand.prototype._check = function () {
    if (this._index === null) {
        throw new Error("Invalid index name of document.");
    }
};

IndexCommand.prototype.getIndex = function () {
    return this._index;
};

IndexCommand.prototype.setIndex = function (index) {
    this._index = (typeof index === "string" && index.length > 0) ? index : null;
};
