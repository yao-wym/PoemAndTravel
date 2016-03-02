// With proper loader configuration you can load,
// pre-process and insert css directly with require().
// See webpack.config.js for details.  

require('./main.styl')
require('./boot.css')
require('./myapp.less')
require('jQuery');
var img = document.createElement('img');
img.src = require('./test.jpg');
var Vue = require('vue');
var app = new Vue({ 
  el: '#app',
  data: { 
    view: 'index-home'
  },
  components: {
    // define the main pages as async components.
    'index-home': function (resolve) {
      require(['./views/index-home'], resolve);
    },
    'index-cart': function (resolve) {
      require(['./views/index-cart'], resolve);
    },
    'index-article': function (resolve) {
      require(['./views/index-article'], resolve);
    },
    'index-ucenter': function (resolve) {
      require(['./views/index-ucenter'], resolve);
    },
    'app-header': function (resolve) {
      require(['./components/header'], resolve);
    },
    'index-tab': function (resolve) {
      require(['./components/index-tab'], resolve);
    }
  }
});

/**
 * Some really crude routing logic here, just for
 * demonstration purposes. The key thing to note here is
 * that we are simply changing the view of the root app -
 * Vue's async components and Webpack's code splitting will
 * automatically handle all the lazy loading for us.
 */

function route () {
  app.view = window.location.hash.slice(1) || 'index-home'
} 

window.addEventListener('hashchange', route)
window.addEventListener('load', route)
