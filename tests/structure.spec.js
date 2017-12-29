const fs = require('fs')
const path = require('path')

describe('Structure of project', () => {
  it('checks existing of project directories', () => {
    const directories = [
      '../app',
      '../app/actions',
      '../app/assets',
      '../app/components',
      '../app/constants',
      '../app/pages',
      '../app/reducers',
      '../app/store',
      '../app/stylesheets',
      '../app/types',
      '../config',
      '../config/misc',
      '../config/variables',
      '../config/webpack'
    ]

    directories.forEach(dir => {
      expect(fs.lstatSync(path.join(__dirname, dir)).isDirectory()).toBeTruthy()
    })
  })
})
