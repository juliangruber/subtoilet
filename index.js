module.exports = sub

function sub (db, space) {
  return {
    read: function (cb) {
      db.read(function (err, state) {
        if (err) return cb(err)
        cb(null, state[space])
      })
    },
    write: function (key, value, cb) {
      db.read(function (err, state) {
        if (err) return cb(err)
        state[space] = state[space] || {}
        state[space][key] = value
        db.write(space, state[space], cb)
      })
    },
    delete: function (key, cb) {
      db.read(function (err, state) {
        if (err) return cb(err)
        delete state[space][key]
        db.write(space, state[space], cb)
      })
    }
  }
}
