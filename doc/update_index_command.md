# Class UpdateIndexCommand

The UpdateIndexCommand class is used for updating settings of indexes on ElasticSearch server.

[Command](command.md) ← [IndexCommand](index_command.md) ← 
[CreateIndexCommand](create_index_command.md) ← UpdateIndexCommand

### REST API:
```
PUT /<index>/_settings
```

## Methods
* **constructor(index, settings, params)** - Initializes new instance of command.
* **execute(client)** - Executes this command.

### Methods inherited from [CreateIndexCommand](create_index_command.md)
* **getSettings()** - Returns settings of index.
* **setSettings(settings)** - Sets settings of index.

### Methods inherited from [IndexCommand](index_command.md)
* **getIndex()** - Returns name of index.
* **setIndex(index)** - Sets name of index.

### Methods inherited from [Command](command.md)
* **getParameter(name)** - Returns value of the specified parameter.
* **setParameter(name, value)** - Sets value of the specified parameter.

## Usage
```javascript
var elastic = require("elastic");
var client = new elastic.Client({/*options*/});

var settings = {
    "index": {
        "number_of_replicas" : 1
    }
};

var cmd = new elastic.UpdateIndexCommand("test", settings);
cmd.execute(client).then(function (result) {
    console.log(JSON.stringify(result, null, "    "));
});
```

### Result
```json
{
    "acknowledged": true
}
```

## Method constructor(index, settings, params)
```
constructor([index: string, [settings: object, [params: object]]])
```

## Method execute(client)
```
execute(client: Client): Promise
```
