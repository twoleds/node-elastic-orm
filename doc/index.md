# Module elastic
Module elastic provides access to ElasticSearch servers.

## Classes
* [BulkCommand](bulk_command.md) - Command for merging set of commands to one bulk command.
* [Client](client.md) - Client for raw communication between application and ElasticSearch servers.
* [Command](command.md) - Base class for all commands.
* [CountCommand](count_command.md) - Command for counting documents into ElasticSearch servers.
* [CreateCommand](create_command.md) - Command for creating documents.
* [CreateIndexCommand](create_index_command.md) - Command for creating indexes.
* [CreateTypeCommand](create_type_command.md) - Command for creating types.
* [DeleteCommand](delete_command.md) - Command for deleting documents.
* [DeleteIndexCommand](delete_index_command.md) - Command for deleting indexes.
* [DeleteTypeCommand](delete_type_command.md) - Command for deleting types.
* [DocumentCommand](document_command.md) - Base class for all commands which working with documents.
* [FetchCommand](fetch_command.md) - Command for fetching documents.
* [FetchIndexCommand](fetch_index_command.md) - Command for fetching settings of indexes.
* [FetchTypeCommand](fetch_type_command.md) - Command for fetching mapping of types.
* [IndexCommand](index_command.md) - Base class for all commands which working with indexes.
* [InfoCommand](info_command.md) - Command for fetching basic information about server.
* [MultiFetchCommand](multi_fetch_command.md) - Command for fetching more documents in one request.
* [OptimizeCommand](optimize_command.md) - Command for optimizing indexes.
* [SearchCommand](search_command.md) - Command for searching documents.
* [StoreCommand](store_command.md) - Command for storing documents.
* [TypeCommand](type_command.md) - Base class for all commands which working with types.
* [UpdateCommand](update_command.md) - Command for updating documents.
* [UpdateIndexCommand](update_index_command.md) - Command for updating indexes.
* [UpdateTypeCommand](update_type_command.md) - Command for updating types.

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
