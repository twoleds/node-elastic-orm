# Class InfoCommand

The InfoCommand class is used for fetching basic information about ElasticSearch server.

[Command](command.md) ← InfoCommand

###REST API:
```
GET /
```

## Methods
* **constructor(params)* - Initializes new instance of command.
* **execute(client)* - Executes this command.

### Inherited methods from [Command](command.md)
* **getParameter(name)** - Returns value of the specified parameter.
* **setParameter(name, value)** - Sets value of the specified parameter.

## Usage
```javascript
var elastic = require("elastic");
var client = new elastic.Client({/*options*/});

var cmd = new elastic.InfoCommand();
cmd.execute(client).then(function (result) {
    console.log(JSON.stringify(result, null, "    "));
});
```

### Result:
```json
{
    "status": 200,
    "name": "es-01",
    "cluster_name": "es",
    "version": {
        "number": "1.4.4",
        "build_hash": "c88f77ffc81301dfa9dfd81ca2232f09588bd512",
        "build_timestamp": "2015-02-19T13:05:36Z",
        "build_snapshot": false,
        "lucene_version": "4.10.3"
    },
    "tagline": "You Know, for Search"
}
```

## Method constructor(params)
```
constructor([params: object])
```

## Method execute(client)
```
execute(client: Client)
```
