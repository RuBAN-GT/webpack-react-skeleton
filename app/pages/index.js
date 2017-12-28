const req = require.context('.', true, /\.\/\w+\/index\.js$/)
req.keys().forEach(key => {
  const name = key.replace(/^\.\/(\w+)\/index\.js$/i, '$1')

  if (name) module.exports[name] = req(key).default
})
