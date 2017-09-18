const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const path = require('path');
const app = express();
 
const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/www'));
 
app.use(webpackDevMiddleware(webpack(webpackConfig), {
  hot: true,
  // filename: 'bundle.js',
  publicPath: webpackConfig.output.publicPath,
  contentBase: path.resolve(__dirname, 'www'),
  // stats: {
  //   colors: true,
  // },
  historyApiFallback: true
}));
 
const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Geiaaa at http://%s:%s', host, port);
});