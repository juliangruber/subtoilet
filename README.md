
# subtoilet

Marrying [toiletdb](https://github.com/maxogden/toiletdb) and [level-sublevel](https://github.com/dominictarr/level-sublevel).

Lets you operate on a subspace of the db using a value that has the same instance as the main toiletdb.

```js
var db = toilet('./data.json')

var sub = sub(db, 'space')

sub.{ready, write, delete}()
```

## Installation

```bash
$ npm install --save subtoilet
```

## License

MIT
