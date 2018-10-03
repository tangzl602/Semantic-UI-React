const path = require('path')

module.exports = {
  use: [
    // Here you can customize the behaviour of your app, check out:
    // https://neutrinojs.org/packages/react/
    // https://neutrinojs.org/packages/web/
    [
      '@neutrinojs/react',
      {
        style: {
          test: /\.less$/,
          modulesTest: /\.module.less$/,
          loaders: [
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: path.resolve(__dirname),
                },
              },
            },
            'less-loader',
          ],
        },
      },
    ],

    // Here we do some tweaks:
    // - fixing resolution of Semantic UI `theme.config`
    // - adding the `src` to roots for simplier imports
    neutrino => {
      neutrino.config.merge({
        resolve: {
          alias: {
            '../../theme.config$': path.resolve(__dirname, 'src/styling/theme.config'),
          },
          modules: [path.resolve(__dirname, 'src')],
        },
      })
    },
  ],
}
