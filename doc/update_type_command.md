# Class UpdateTypeCommand

The UpdateTypeCommand class is used for updating types on ElasticSearch server.

[Command](command.md) ← [IndexCommand](index_command.md) ← [TypeCommand](type_command.md) ←
[CreateTypeCommand](create_type_command.md) ← UpdateTypeCommand

### REST API:
```
PUT /<index>/_mapping/<type>
```

## Methods
* **constructor(index, type, mapping, params)** - Initializes new instance of command.
* **execute(client)** - Executes this command.

### Methods inherited from [UpdateTypeCommand](update_type_command.md)
* **getMapping()** - Returns mapping of type.
* **setMapping(mapping)** - Sets mapping of type.

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

var mapping = {
    "post": {
        "properties": {
            "title": {
                "type": "string",
                "analyzer": "standard"
            },
            "tags": {
                "type": "string",
                "analyzer": "keyword"
            },
            "message": {
                "type": "string",
                "index": "no"
            },
            "user": {
                "type": "string",
                "index": "not_analyzed"
            },
            "published": {
                "type": "boolean",
                "index": "not_analyzed"
            }
        }
    }
};

var cmd = new elastic.UpdateTypeCommand("test", "post", mapping);
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

## Method constructor(index, type, mapping, params)
```
constructor([index: string, [type: string, [mapping: object, [params: object]]]])
```

## Method execute(client)
```
execute(client: Client): Promise
```
