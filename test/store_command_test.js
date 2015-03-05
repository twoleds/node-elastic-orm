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

exports.testGettersAndSetters = function (test) {

    var source = {
        "name": "Name of document",
        "description": "This is a document for testing.",
        "gallery": [
            {
                "id": "14256",
                "title": "This is a image of gallery"
            },
            {
                "id": "49284",
                "title": "This is another image of gallery"
            }
        ]
    };

    var cmd = new elastic.StoreCommand();
    cmd.setSource(source);

    test.deepEqual(
        cmd.getSource(), source, "Corrupted getSource or setSource."
    );
    test.done();

};

exports.testInheritance = function (test) {

    var cmd = new elastic.StoreCommand();
    test.ok(
        cmd instanceof elastic.DocumentCommand,
        "StoreCommand must extends DocumentCommand."
    );
    test.done();

};
