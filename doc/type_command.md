# Class TypeCommand

The TypeCommand class is abstract class for all commands witch working with types on ElasticSearch.

[Command](command.md) ← [IndexCommand](index_command.md) ← TypeCommand

## Methods
+ **constructor(index, type, params)** - Initializes instance of this command.
+ **getType()** - Returns name of type.
+ **setType(type)** - Sets name of type.

### Methods inherited from [IndexCommand](index_command.md)
* **getIndex()** - Returns name of index.
* **setIndex(index)** - Sets name of index.

### Methods inherited from [Command](command.md)
* **getParameter(name)** - Returns value of the specified parameter.
* **setParameter(name, value)** - Sets value of the specified parameter.

## Method getType()
```
getType(): string|null
```

## Method setType(type)
```
setType(type: string)
```
