require('reflect-metadata');
require('zone.js');

var ng = require('@angular/platform-browser-dynamic');

require('./index.<%- css %>');

var Main = require('./app/main');

var ngCore = require('@angular/core');

<% if (modules === 'systemjs') { -%>
var systemEnv = require('@system-env');

if (systemEnv.production) {
<% } else { -%>
if (process.env.NODE_ENV === 'production') {
<% } -%>
  ngCore.enableProdMode();
}

ng.bootstrap(Main);
