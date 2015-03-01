# Class FetchIndexCommand

The FetchIndexCommand class fetching settings of index.

[Command](command.md) ← [IndexCommand](index_command.md) ← FetchIndexCommand

### REST API:
```
GET /<index>/_settings
```

## Methods
* **constructor(index, params)** - Initializes new instance of command.
* **execute(client)** - Executes this command.

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

var cmd = new elastic.FetchIndexCommand("test");
cmd.execute(client).then(function (result) {
    console.log(JSON.stringify(result, null, "    "));
});
```

### Result
```json
{
    "index": {
        "creation_date": "1424610226276",
        "number_of_shards": "12",
        "number_of_replicas": "2",
        "version": {
            "created": "1040499"
        },
        "uuid": "8x5eiA_MS2iwehObYv3QXw"
    }
}
```

## Method execute(client)
```
execute(client: Client): Promise
```
