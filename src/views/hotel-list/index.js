module.exports = {
  template: require('./template.html'),
  replace: true,
  data: function(){
  	return {
  		filterList:['默认排序','价格从低到高','价格从高到低','销量从高到低','评价从高到低'],
  		orderList:['默认排序','传统酒店','牧家乐']
  	}
  }
}