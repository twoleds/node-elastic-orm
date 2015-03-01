# Class BulkCommand

The BulkCommand class is used for merging set of commands into one command. The bulk command 
supports only these commands: [CreateCommand](create_command.md), 
[DeleteCommand](delete_command.md), [StoreCommand](store_command.md) and 
[UpdateCommand](update_command.md). Others command cannot be added into bulk command.

[Command](command.md) ← BulkCommand

## Methods
* **constructor(params)** - Initializes new instance of command.
* **add(command)** - Adds command into bulk.
* **execute(client)** - Executes this command.
* **forEach(callback)** - Browses commands in bulk.
* **remove(command)** - Removes command from bulk.

### Methods inherited from [Command](command.md)
* **getParameter(name)** - Returns value of the specified parameter.
* **setParameter(name, value)** - Sets value of the specified parameter.

## Usage
```javascript
var elastic = require("elastic");
var client = new elastic.Client({/*options*/});

var bulk = new elastic.BulkCommand();
bulk.add(new elastic.CreateCommand("test", "post", "1", {/* source */}));
bulk.add(new elastic.CreateCommand("test", "post", "2", {/* source */}));
bulk.add(new elastic.CreateCommand("test", "post", "3", {/* source */}));

bulk.execute(client).then(function (result) {
    console.log(JSON.stringify(result, null, "    "));
});
```

### Result
```json
{
    "took": 2,
    "errors": false,
    "items": [
        {
            "create": {
                "_index": "test",
                "_type": "post",
                "_id": "1",
                "_version": 1,
                "status": 201
            }
        },
        {
            "create": {
                "_index": "test",
                "_type": "post",
                "_id": "2",
                "_version": 1,
                "status": 201
            }
        },
        {
            "create": {
                "_index": "test",
                "_type": "post",
                "_id": "3",
                "_version": 1,
                "status": 201
            }
        }
    ]
}
```

## Method constructor(params)
```
constructor([params: object])
```

## Method add(command)
```
add(command: DeleteCommand|StoreCommand): boolean
```

## Method execute(client)
```
execute(client: Client): Promise
```

## Method forEach(callback)
```
forEach(callback: function)
```

## Method remove(command)
```
remove(command: DeleteCommand|StoreCommand): boolean
```