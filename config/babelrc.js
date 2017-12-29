module.exports = {
  env: {
    test: {
      plugins: ['transform-es2015-modules-commonjs']
    }
  },
  plugins: [
    [
      'flow-runtime',
      {
        assert: process.env.NODE_ENV != 'production',
        annotate: true
      }
    ],
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          '~': './app',
          actions: './app/actions',
          assets: './app/assets',
          components: './app/components',
          config: './config',
          constants: './app/constants',
          containers: './app/containers',
          pages: './app/pages',
          reducers: './app/reducers',
          store: './app/store',
          types: './app/types'
        }
      }
    ],
    'react-hot-loader/babel',
    'transform-class-properties'
  ],
  presets: [
    [
      'env',
      {
        modules: process.env.NODE_ENV == 'production' ? 'commonjs' : false,
        targets: {
          browsers: ['last 5 versions']
        },
        useBuiltIns: true
      }
    ],
    'react',
    'flow'
  ]
}
