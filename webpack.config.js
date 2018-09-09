/** @prettier */

const DIST_DIR = 'dist';
const PORT = 3000;

const webpack = require('webpack');
const pkg = require('./package.json');
const path = require('path');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const IS_DEVS = process.env.NODE_ENV === 'development';

const plugins = [new VueLoaderPlugin()];

if (!IS_DEVS) {
  plugins.push(
    new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 8,
        output: {
          comments: 'some'
        }
      }
    }),
    new webpack.BannerPlugin({
      banner: `${pkg.name} v${pkg.version} ${pkg.author} | ${pkg.license}`
    })
  );
}

const CSS_LOADERS = [
  {
    loader: 'css-loader',
    options: {
      url: false,
      sourceMap: IS_DEVS
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: [autoprefixer()],
      sourceMap: IS_DEVS ? 'inline' : false
    }
  },
  {
    loader: 'sass-loader',
    options: {
      data: `$env: ${process.env.NODE_ENV};`,
      outputStyle: IS_DEVS ? 'expanded' : 'compressed',
      sourceMap: IS_DEVS
    }
  }
];

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, DIST_DIR),
    filename: '[name].min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules|src\/js/,
        use: ['style-loader', ...CSS_LOADERS]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules|src\/sass/,
        use: ['style-loader', ...CSS_LOADERS]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            scss: ['vue-style-loader', 'css-loader', 'sass-loader'],
            sass: ['vue-style-loader', 'css-loader', 'sass-loader']
          }
          // other vue-loader options go here
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, DIST_DIR),
    port: PORT
  },
  devtool: IS_DEVS ? 'source-map' : false,
  optimization: {
    minimize: false
  },
  plugins: plugins
};
