/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

const warn = warning => console.log(warning.bold.yellow);

console.log('Generating minified bundle for prod via Webpack. This will take a moment...'.blue);

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.forEach(err => console.log(err.red));
  }

  if (jsonStats.hasWarnings) {
    warn('Webpack generated the following warnings: ');
    jsonStats.warnings.forEach(warn => console.log(warn));
  }

  console.log(`Webpack stats: ${stats}`);

  console.log(`Your app has been compiled in production mode and written to /dist`.green);

  return 0;
});
