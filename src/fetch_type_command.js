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

var FetchTypeCommand = module.exports = function (index, type, params) {
    TypeCommand.call(this, index, type, params);
};

FetchTypeCommand.prototype = Object.create(TypeCommand.prototype);
FetchTypeCommand.prototype.constructor = FetchTypeCommand;

FetchTypeCommand.prototype.execute = function (client) {
    var self = this;
    return new Promise(function (resolve, reject) {
        self._check();
        var path = "/" + self._index + "/_mapping/" + self._type;
        client.execute("GET", path, null, self._params)
            .then(JSON.parse)
            .then(function (result) {
                if (typeof result[self._index] === "object") {
                    if (typeof result[self._index]["mappings"] === "object") {
                        return result[self._index]["mappings"];
                    }
                }
            })
            .then(resolve).catch(reject);
    });
};
