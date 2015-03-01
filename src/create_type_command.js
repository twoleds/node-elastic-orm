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

var CreateTypeCommand = module.exports = function (index, type, mapping, params) {
    TypeCommand.call(this, index, type, params);
    this.setMapping(mapping);
};

CreateTypeCommand.prototype = Object.create(TypeCommand.prototype);
CreateTypeCommand.prototype.constructor = CreateTypeCommand;

CreateTypeCommand.prototype._check = function () {
    TypeCommand.prototype._check.call(this);
    if (this._mapping === null) {
        throw new Error("Invalid mapping.");
    }
};

CreateTypeCommand.prototype.execute = function (client) {
    var self = this;
    return new Promise(function (resolve, reject) {
        self._check();
        var path = "/" + self._index + "/_mapping/" + self._type;
        client.execute("PUT", path, self._mapping, self._params)
            .then(JSON.parse)
            .then(resolve).catch(reject);
    });
};


CreateTypeCommand.prototype.getMapping = function () {
    return this._mapping !== null ? JSON.parse(this._mapping) : null;
};

CreateTypeCommand.prototype.setMapping = function (mapping) {
    if (typeof mapping === "object" && mapping !== null) {
        this._mapping = JSON.stringify(mapping);
    } else {
        this._mapping = null;
    }
};
