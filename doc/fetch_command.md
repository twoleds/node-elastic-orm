# Class FetchCommand

The FetchCommand class is used for fetching documents.

[Command](command.md) ← [IndexCommand](index_command.md) ← [TypeCommand](type_command.md) ←
[DocumentCommand](document_command.md) ← FetchCommand

### REST API:
```
GET /<index>/<type>/<id>
```

## Methods
* **constructor(index, type, id, source, params)** - Initializes new instance of command.
* **execute(client)** - Executes this command.

### Methods inherited from [DocumentCommand](document_command.md)
* **getId()** - Returns identifier of document.
* **setId(id)** - Sets identifier of document.

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

var cmd = new elastic.FetchCommand("test", "post", "1");
cmd.execute(client).then(function (result) {
    console.log(JSON.stringify(result, null, "    "));
});
```

### Result
```json
{
    "_index": "test",
    "_type": "post",
    "_id": "1",
    "_version": 1,
    "found": true,
    "_source": {
        "title": "My first post",
        "tags": [
            "first post",
            "store command"
        ],
        "message": "This is my first post.",
        "user": "Me"
    }
}

```

## Method constructor(index, type, id, source, params)
```
constructor([index: string, [type: string, [id: string, [source: object, [params: object]]]]])
```

## Method execute(client)
```
execute(client: Client): Promise
```
