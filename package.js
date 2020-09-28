Package.describe({
  name: 'fullcalendar:fullcalendar',
  version: '3.10.2',
  summary: 'Full-sized drag & drop event calendar',
  git: 'https://github.com/rgnevashev/fullcalendar.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.10.2');
  api.use(['momentjs:moment','jquery@3.0.0','templating']);
  api.addAssets(["dist/fullcalendar.print.css"], 'client');
  api.addFiles([
    "template.html",
    "template.js",
    "dist/fullcalendar.css",
    "dist/fullcalendar.js",
    "dist/locale-all.js",
    "dist/gcal.js",
  ], 'client');
});
