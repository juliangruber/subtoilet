var test = require('tape')
var toilet = require('toiletdb/inmemory')
var subtoilet = require('.')

test('read', function (t) {
  var db = toilet()
  var sub = subtoilet(db, 'space')
  db.write('space', { ok: 'good' }, function (err) {
    t.error(err)
    sub.read(function (err, state) {
      t.error(err)
      t.deepEqual(state, { ok: 'good' })
      t.end()
    })
  })
})

test('write', function (t) {
  var db = toilet()
  var sub = subtoilet(db, 'space')
  sub.write('ok', 'good', function (err) {
    t.error(err)
    db.read(function (err, state) {
      t.error(err)
      t.deepEqual(state, { space: { ok: 'good' } })
      t.end()
    })
  })
})

test('delete', function (t) {
  var db = toilet()
  var sub = subtoilet(db, 'space')
  db.write('space', { ok: 'good' }, function (err) {
    t.error(err)
    sub.delete('ok', function (err) {
      t.error(err)
      db.read(function (err, state) {
        t.error(err)
        t.deepEqual(state, { space: {} })
        t.end()
      })
    })
  })
})
