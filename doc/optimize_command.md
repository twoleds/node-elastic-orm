# Class OptimizeCommand

The OptimizeCommand class is used for optimize indexes.

### REST API:
```
GET /<index>/_optimize
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

var cmd = new elastic.OptimizeCommand("test");
cmd.execute(client).then(function (result) {
    console.log(JSON.stringify(result, null, "    "));
});
```

### Result
```
{
    "_shards": {
        "total": 12,
        "successful": 12,
        "failed": 0
    }
}
```

# Method constructor(index, params)
```
constructor([index: string, [params: object]])
```

# Method execute(client)
```
execute(client: Client): Promise
```
