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

exports.CONSISTENCY_ONE = "one";
exports.CONSISTENCY_QUORUM = "quorum";
exports.CONSISTENCY_ALL = "all";

exports.PARAM_CONSISTENCY = "consistency";
exports.PARAM_REFRESH = "refresh";
exports.PARAM_ROUTING = "routing";
exports.PARAM_SOURCE = "_source";
exports.PARAM_SOURCE_INCLUDE = "_source_include";
exports.PARAM_SOURCE_EXCLUDE = "_source_exclude";
exports.PARAM_TIMEOUT = "timeout";
exports.PARAM_TTL = "ttl";
exports.PARAM_VERSION = "version";

exports.REFRESH_ENABLED = "true";
exports.REFRESH_DISABLED = "false";

exports.SOURCE_ENABLED = "true";
exports.SOURCE_DISABLED = "false";

exports.Client = require("./src/client.js");
exports.Exception = require("./src/exception.js");

exports.BulkCommand = require("./src/bulk_command.js");
exports.Command = require("./src/command.js");
exports.CountCommand = require("./src/count_command.js");
exports.CreateCommand = require("./src/create_command.js");
exports.CreateIndexCommand = require("./src/create_index_command.js");
exports.CreateTypeCommand = require("./src/create_type_command.js");
exports.DeleteCommand = require("./src/delete_command.js");
exports.DeleteIndexCommand = require("./src/delete_index_command.js");
exports.DeleteTypeCommand = require("./src/delete_type_command.js");
exports.DocumentCommand = require("./src/document_command.js");
exports.FetchCommand = require("./src/fetch_command.js");
exports.FetchIndexCommand = require("./src/fetch_index_command.js");
exports.FetchTypeCommand = require("./src/fetch_type_command.js");
exports.IndexCommand = require("./src/index_command.js");
exports.InfoCommand = require("./src/info_command.js");
exports.MultiFetchCommand = require("./src/multi_fetch_command.js");
exports.OptimizeCommand = require("./src/optimize_command.js");
exports.SearchCommand = require("./src/search_command.js");
exports.StoreCommand = require("./src/store_command.js");
exports.TypeCommand = require("./src/type_command.js");
exports.UpdateCommand = require("./src/update_command.js");
exports.UpdateIndexCommand = require("./src/update_index_command.js");
exports.UpdateTypeCommand = require("./src/update_type_command.js");
