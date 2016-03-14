require('./style.styl');
module.exports = {
  	template: require('./template.html'),
  	replace: true,
  	 methods: {
  	 	goNextStep:goNextStep
  	 },
  	 components: {
    'yellow-bottom': require('../../components/yellow-bottom'),
  }
}
function goNextStep(){
	$.post(LOGIN_API).done(registerDone).fail(registerFail);
}