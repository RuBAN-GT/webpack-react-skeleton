const req = require.context('.', false, /\.js?$/)
req.keys().forEach(key => {
  const name = key.replace(/^\.\/(\w+)\.js?$/i, '$1')

  if (name && name != 'index') module.exports[name] = req(key)
})
