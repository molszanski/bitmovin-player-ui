const path = require('path');

const wpConf = require('react-scripts-ts/config/webpack.config.dev.js')
wpConf.resolve.alias.react = 'preact-compat'
wpConf.resolve.alias['react-dom'] = 'preact-compat'

const reactivePath = path.resolve(__dirname, '../src/ts/reactive');
const distPath = path.resolve(__dirname, '../dist');

module.exports = {
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
        path.resolve(reactivePath, 'components/Label.tsx'),
        path.resolve(reactivePath, 'components/Button.tsx'),
        path.resolve(reactivePath, 'components/Animate.tsx'),
      ])
    },
    {
      name: 'Connected',
      components: () => ([
        path.resolve(reactivePath, 'containers/SubtitleSettings', 'index.tsx'),
        path.resolve(reactivePath, 'containers/AppContainer.tsx'),
        path.resolve(reactivePath, 'containers/SubtitleSettingsPanel.tsx'),
      ])
    },
    {
      name: 'Islands',
      content: path.resolve(reactivePath, 'islands/Readme.md'),
      components: () => ([
        path.resolve(reactivePath, 'islands/islandSubtitlePanel.tsx'),
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
}
