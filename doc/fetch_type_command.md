# Class FetchTypeCommand

The FetchTypeCommand class fetching mapping of type.

[Command](command.md) ← [IndexCommand](index_command.md) ← [TypeCommand](type_command.md)
← FetchTypeCommand

### REST API:
```
GET /<index>/_mapping/<type>
```

## Methods
* **constructor(index, type, params)** - Initializes new instance of command.
* **execute(client)** - Executes this command.

### Methods inherited from [UpdateTypeCommand](update_type_command.md)
* **getMapping()** - Returns mapping of type.
* **setMapping(mapping)** - Sets mapping of type.

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

var cmd = new elastic.FetchTypeCommand("test", "post");
cmd.execute(client).then(function (result) {
    console.log(JSON.stringify(result, null, "    "));
});
```

### Result
```json
{
    "post": {
        "properties": {
            "message": {
                "type": "string",
                "index": "no"
            },
            "tags": {
                "type": "string",
                "analyzer": "keyword"
            },
            "title": {
                "type": "string",
                "analyzer": "standard"
            },
            "user": {
                "type": "string",
                "index": "not_analyzed"
            }
        }
    }
}
```

## Method constructor(index, type, mapping, params)
```
constructor([index: string, [type: string, [mapping: object, [params: object]]]])
```

## Method execute(client)
```
execute(client: Client): Promise
```
