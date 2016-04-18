import path from 'path';
import Express from 'express';
import PrettyError from 'pretty-error';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config';

const start = Date.now();

const app = new Express();
const port = 1234;

if (process.env.NODE_ENV === 'development') {
  const pe = new PrettyError();
  pe.start();

  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    contentBase: 'http://localhost:' + port,
    hot: true,
    inline: true,
    lazy: false,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: { colors: true }
  }));

  app.use(webpackHotMiddleware(compiler));
}

app.use(Express.static(__dirname));

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.log(`This took ${(Date.now() - start) / 1000} seconds to load.`);
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
