# Class DeleteIndexCommand

The DeleteIndexCommand class is used for removing index from ElasticSearch server.

[Command](command.md) ← [IndexCommand](index_command.md) ← DeleteIndexCommand

### REST API:
```
DELETE /<index>
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

var cmd = new elastic.DeleteIndexCommand("test");
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

## Method execute(client)
```
execute(client: Client): Promise
```
