# Class CreateIndexCommand

The CreateIndexCommand class is used for creating new indexes on ElasticSearch server.

[Command](command.md) ← [IndexCommand](index_command.md) ← CreateIndexCommand

### REST API:
```
PUT /<index>
```

## Methods
* **constructor(index, settings, params)** - Initializes new instance of command.
* **execute(client)** - Executes this command.
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
        "number_of_shards" : 12,
        "number_of_replicas" : 2
    }
};

var cmd = new elastic.CreateIndexCommand("test");
cmd.setSettings(settings);
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

## Method getSettings()
```
getSettings(): object|null
```

## Method setSettings(settings)
```
setSettings(settings: object)
```
