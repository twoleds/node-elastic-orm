# Class DeleteTypeCommand

The DeleteTypeCommand class is used for removing type from ElasticSearch server.

[Command](command.md) ← [IndexCommand](index_command.md) ← [TypeCommand](type_command.md)
← DeleteTypeCommand

### REST API:
```
DELETE /<index>/<type>
```

## Methods
* **constructor(index, type, params)** - Initializes new instance of command.
* **execute(client)** - Executes this command.

### Methods inherited from [TypeCommand](type_command.md)
* **getType()** - Returns name of type.
* **setType(type)** - Sets name of type.

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

var cmd = new elastic.DeleteTypeCommand("test", "post");
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

## Method constructor(index, type, params)
```
constructor([index: string, [type: string, [params: object]]])
```

## Method execute(client)
```
execute(client: Client): Promise
```
