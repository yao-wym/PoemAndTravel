// With proper loader configuration you can load,
// pre-process and insert css directly with require().
// See webpack.config.js for details.  

if(localStorage.getItem('isLogin')==null){
  location.href='#user-login'
}