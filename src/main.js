// With proper loader configuration you can load,
// pre-process and insert css directly with require().
// See webpack.config.js for details.  

require('jquery');
require('./main.styl')
require('./boot.css')
require('./myapp.less')
require('./asset/js/url.js')
require('./asset/js/function.js')
var Vue = require('vue');
var VueRouter = require('vue-router');
Vue.use(VueRouter);
var app = new Vue({
  el: '#app',
  data: {
    view: 'index-home'
  },
  components: {
    // define the main pages as async components.
    'index-home': function(resolve) {
      require(['./views/index-home'], resolve);
    },
    'index-cart': function(resolve) {
      require(['./views/index-cart'], resolve);
    },
    'index-article': function(resolve) {
      require(['./views/index-article'], resolve);
    },
    'index-ucenter': function(resolve) {
      require(['./views/index-ucenter'], resolve);
    },
    'app-header': function(resolve) {
      require(['./components/header'], resolve);
    },
    'index-tab': function(resolve) {
      require(['./components/index-tab'], resolve);
    },
    'user-login': function(resolve) {
      require(['./views/user-login'], resolve);
    },
    'user-reg': function(resolve) {
      require(['./views/user-reg'], resolve);
    },
    'common-header': function(resolve) {
      require(['./components/common-header'], resolve);
    },
    'user-findpwd': function(resolve) {
      require(['./views/user-findpwd'], resolve);
    },
    'hotel-list': function(resolve) {
      require(['./views/hotel-list'], resolve);
    },
    'app-tab':function(resolve) {
      require(['./components/index-tab'], resolve);
    },
    'filter-tab':function(resolve) {
      require(['./components/filter-tab'], resolve);
    },
    'return-top':function(resolve) {
      require(['./components/go-top'], resolve);
    },
    'return-top':function(resolve) {
      require(['./components/go-top'], resolve);
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

function route() {
  // checkLogin();
  app.view = window.location.hash.slice(1) || 'index-home';
  console.log(app.view);
}

function checkLogin() {
  if (window.location.hash.slice(1) == 'index-ucenter') {
    if (localStorage.getItem('isLogin') == null) {
      location.href = '#user-login';
    };
  }
}


window.addEventListener('hashchange', route)
window.addEventListener('load', route)
initLayout();

function initLayout() {
  var dpr, rem, scale;
  var docEl = document.documentElement;
  var fontEl = document.createElement('style');
  var metaEl = document.querySelector('meta[name="viewport"]');
  dpr = window.devicePixelRatio || 1;
  scale = 1/dpr;
  rem = docEl.clientWidth * dpr / 10;
  // 设置viewport，进行缩放，达到高清效果 
  metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ', initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
  // 设置data-dpr属性，留作的css hack之用 
  docEl.setAttribute('data-dpr', dpr);
  // 动态写入样式 
  docEl.firstElementChild.appendChild(fontEl);
  fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
  // 给js调用的，某一dpr下rem和px之间的转换函数 
  window.rem2px = function(v) {
    v = parseFloat(v);
    return v * rem;
  };
  window.px2rem = function(v) {
    v = parseFloat(v);
    return v / rem;
  };
  window.dpr = dpr;
  window.rem = rem;
}