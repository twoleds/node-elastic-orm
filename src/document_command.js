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

var DocumentCommand = module.exports = function (index, type, id, params) {
    TypeCommand.call(this, index, type, params);
    this.setId(id);
};

DocumentCommand.prototype = Object.create(TypeCommand.prototype);
DocumentCommand.prototype.constructor = DocumentCommand;

DocumentCommand.prototype._check = function () {
    TypeCommand.prototype._check.call(this);
    if (this._id === null) {
        throw new Error("Invalid identifier of document.");
    }
};

DocumentCommand.prototype.getId = function () {
    return this._id;
};

DocumentCommand.prototype.setId = function (id) {
    this._id = (typeof id === "string" && id.length > 0) ? id : null;
};
