# Module elastic
Module elastic provides access to ElasticSearch servers.

## Classes
* [BulkCommand](doc/bulk_command.md) - Command for merging set of commands to one bulk command.
* [Client](doc/client.md) - Client for raw communication between application and ElasticSearch servers.
* [Command](doc/command.md) - Base class for all commands.
* [CountCommand](doc/count_command.md) - Command for counting documents into ElasticSearch servers.
* [CreateCommand](doc/create_command.md) - Command for creating documents.
* [CreateIndexCommand](doc/create_index_command.md) - Command for creating indexes.
* [CreateTypeCommand](doc/create_type_command.md) - Command for creating types.
* [DeleteCommand](doc/delete_command.md) - Command for deleting documents.
* [DeleteIndexCommand](doc/delete_index_command.md) - Command for deleting indexes.
* [DeleteTypeCommand](doc/delete_type_command.md) - Command for deleting types.
* [DocumentCommand](doc/document_command.md) - Base class for all commands which working with documents.
* [FetchCommand](doc/fetch_command.md) - Command for fetching documents.
* [FetchIndexCommand](doc/fetch_index_command.md) - Command for fetching settings of indexes.
* [FetchTypeCommand](doc/fetch_type_command.md) - Command for fetching mapping of types.
* [IndexCommand](doc/index_command.md) - Base class for all commands which working with indexes.
* [InfoCommand](doc/info_command.md) - Command for fetching basic information about server.
* [MultiFetchCommand](doc/multi_fetch_command.md) - Command for fetching more documents in one request.
* [OptimizeCommand](doc/optimize_command.md) - Command for optimizing indexes.
* [SearchCommand](doc/search_command.md) - Command for searching documents.
* [StoreCommand](doc/store_command.md) - Command for storing documents.
* [TypeCommand](doc/type_command.md) - Base class for all commands which working with types.
* [UpdateCommand](doc/update_command.md) - Command for updating documents.
* [UpdateIndexCommand](doc/update_index_command.md) - Command for updating indexes.
* [UpdateTypeCommand](doc/update_type_command.md) - Command for updating types.

## Constants
* CONSISTENCY_ONE - Defines level of consistency - require only one replication.
* CONSISTENCY_QUORUM - Defines level of consistency - require quorum replications
* CONSISTENCY_ALL - Defines level of consistency - require all replications.
* PARAM_CONSISTENCY - Defines level of consistency.
* PARAM_REFRESH - Enables or disables instant refreshing of index (for real-time).
* PARAM_ROUTING - Defines routing of document.
* PARAM_SOURCE - Enables or disables fetching source of documents.
* PARAM_SOURCE_INCLUDE - Filtering fields in source of documents (whitelist).
* PARAM_SOURCE_EXCLUDE - Filtering fields in source of documents (blacklist).
* PARAM_TIMEOUT - Defines timeout of operation.
* PARAM_TTL - Defines time to live of documents.
* PARAM_VERSION - Defines version number of document for atomic operations.
* REFRESH_ENABLED - Enabling instant refreshing of index.
* REFRESH_DISABLED - Disabling instant refreshing of index (index will be refreshed by server in defines period).
* SOURCE_ENABLED - Enabling retrieving source of document.
* SOURCE_DISABLED - Disabling retrieving source of document.
