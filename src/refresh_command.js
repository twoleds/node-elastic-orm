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

var RefreshCommand = module.exports = function (index, params) {
    IndexCommand.call(this, index, params);
    this.setIndex(index);
};

RefreshCommand.prototype = Object.create(IndexCommand.prototype);
RefreshCommand.prototype.constructor = RefreshCommand;

RefreshCommand.prototype._check = function () {
    IndexCommand.prototype._check.call(this);
};

RefreshCommand.prototype.execute = function (client) {
    var self = this;
    return new Promise(function (resolve, reject) {
        self._check();
        var path = "/" + self._index + "/_refresh";
        client.execute("POST", path, null, self._params)
            .then(JSON.parse)
            .then(resolve).catch(reject);
    });
};
