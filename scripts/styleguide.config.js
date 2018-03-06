const path = require('path');

const wpConf = require('react-scripts-ts/config/webpack.config.dev.js')
wpConf.resolve.alias.react = 'preact-compat'
wpConf.resolve.alias['react-dom'] = 'preact-compat'

const reactivePath = path.resolve(__dirname, '../src/ts/reactive');
const distPath = path.resolve(__dirname, '../dist');

module.exports = {
  // components: 'src/components/**/*.{ts,tsx}',
  propsParser: require('react-docgen-typescript').parse,
  webpackConfig: wpConf,
  template: './styleguide.template.html',
  theme: {
    color: {
      link: 'firebrick',
      linkHover: 'salmon'
    }
  },
  sections: [
    {
      name: 'Simple components',
      components: () => ([
        path.resolve(reactivePath, 'components/SelectBox.tsx'),
        path.resolve(reactivePath, 'components/PanelItem.tsx'),
        path.resolve(reactivePath, 'components/SettingsPanel.tsx'),
        path.resolve(reactivePath, 'components/TitleBar.tsx'),
        // path.resolve(reactivePath, 'components/SelectBox', 'index.tsx'),
        // path.resolve(__dirname, 'src/components/SimpleSelectBox', 'index.tsx'),
        // path.resolve(__dirname, 'src/components/PanelItem', 'index.tsx'),
        // path.resolve(__dirname, 'src/components/TitleBar', 'index.tsx'),
      ])
    }
  ],
  configureServer(app) {
    app.get('/file/:name', function (req, res, next) {

      var options = {
        root: distPath,
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
      };

      var fileName = req.params.name;
      res.sendFile(fileName, options, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('Sent:', fileName);
        }
      });

    });
  },
    // {
    //   name: 'Complex and combined',
    //   components: () => ([
    //     path.resolve(__dirname, 'src/components/SettingsPanel', 'index.tsx'),
    //   ])
    // },
    // {
    //   name: 'Connected',
    //   content: path.resolve(__dirname, 'src/containers/Readme.md'),
    //   components: () => ([
    //     path.resolve(__dirname, 'src/containers/FontSizeSelectBox', 'index.tsx'),
    //     path.resolve(__dirname, 'src/containers/SubtitleSettings', 'index.tsx'),
    //     path.resolve(__dirname, 'src/containers/AppContainer', 'index.tsx'),
    //     path.resolve(__dirname, 'src/containers/SubtitleSettingsPanel', 'index.tsx'),
    //   ])
    // }
  // ]
}
