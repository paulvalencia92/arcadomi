const mix = require('laravel-mix');

require('laravel-mix-bundle-analyzer');

if (mix.inProduction()) {
    mix.bundleAnalyzer();
}

mix.webpackConfig({
    output: {
       chunkFilename: 'js/[name].[chunkhash].js',
    }
});

// mix.config.fileLoaderDirs.fonts = process.env.MIX_SENTRY_DSN_SOURCE;
mix.setResourceRoot(process.env.MIX_SENTRY_DSN_SOURCE)
    .js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css').sourceMaps();
