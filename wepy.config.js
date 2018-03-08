const path = require('path')
var prod = process.env.NODE_ENV === 'production'

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: !prod,
  build: {
  },
  resolve: {
    alias: {
      counter: path.join(__dirname, 'src/components/counter'),
      '@': path.join(__dirname, 'src'),
      'api': path.join(__dirname, 'src/api'),
      'components': path.join(__dirname, 'src/components'),
      'common': path.join(__dirname, 'src/common'),
      'mixins': path.join(__dirname, 'src/mixins'),
      'stylus': path.join(__dirname, 'src/stylus')
    },
    aliasFields: ['wepy'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: prod
    },
    stylus: {
      compress: true
    },
    babel: {
      sourceMap: !prod,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions'
      ]
    }
  },
  plugins: {
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}

if (prod) {
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {
      }
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    }
  }
}
