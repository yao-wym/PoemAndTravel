require('./style.styl')
require('./cartList.js')
require('../../asset/js/url.js')
var test2 = "aaa"
module.exports = {
	template: require('./template.html'),
	replace: true,
	data: function () {
    return {
      test: test2,
    }},
	props: ['side', 'name', 'cartGoods']
}
function getArticleList() {
	$.getJSON(ARTICLE_LIST_API, {
		param1: 'value1'
	}, function(json, textStatus) {
		/*optional stuff to do after success */
		// alert(JSON.stringify(json));
		test2 = "bbb"
	});
}
getArticleList();