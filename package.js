Package.describe({
  name: 'kamil7732:cfs-graphicsmagick',
  version: '0.0.18',
  summary: "update for newest changes that aren't visible in atmosphere",
  git: "https://github.com/CollectionFS/Meteor-cfs-graphicsmagick.git"
});

Npm.depends({
  gm: "1.17.0"
});

//also requires that you install the ImageMagick
//or GraphicsMagick app on your server

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.addFiles('gm.js', 'server');

  api.export('gm');
});

Package.onTest(function(api) {
  api.use(['cfs:graphicsmagick', 'test-helpers', 'tinytest'], 'server');
  api.addFiles('tests/server-tests.js', 'server');
});
