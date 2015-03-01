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

var IndexCommand = require('./index_command.js');

var TypeCommand = module.exports = function (index, type, params) {
    IndexCommand.call(this, index, params);
    this.setType(type);
};

TypeCommand.prototype = Object.create(IndexCommand.prototype);
TypeCommand.prototype.constructor = TypeCommand;

TypeCommand.prototype._check = function () {
    IndexCommand.prototype._check.call(this);
    if (this._type === null) {
        throw new Error("Invalid type name of document.");
    }
};

TypeCommand.prototype.getType = function () {
    return this._type;
};

TypeCommand.prototype.setType = function (type) {
    this._type = (typeof type === "string" && type.length > 0) ? type : null;
};
