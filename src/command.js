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

var Command = module.exports = function (params) {
    this._params = null;
    if (typeof params === "object" && params !== null) {
        for (var name in params) {
            if (params.hasOwnProperty(name)) {
                this.setParameter(name, params[name]);
            }
        }
    }
};

Command.prototype = Object.create(Object.prototype);
Command.prototype.constructor = Command;

Command.prototype.execute = function (client) {
    throw new Error("Cannot execute abstract command.");
};

Command.prototype.getParameter = function (name) {
    var value = null;
    if (this._params !== null && typeof this._params[name] !== "undefined") {
        value = this._params[name];
    }
    return value;
};

Command.prototype.setParameter = function (name, value) {
    if (this._params === null) {
        this._params = {};
    }
    this._params[name] = value;
};
