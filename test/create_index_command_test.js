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

var elastic = require("../index.js");

exports.testInheritance = function (test) {

    var cmd = new elastic.CreateIndexCommand();
    test.ok(
        cmd instanceof elastic.IndexCommand,
        "CreateIndexCommand must extends IndexCommand."
    );
    test.done();

};
