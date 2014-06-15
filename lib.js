function elements(selector) {
	var items = this.sourceItems || [ document ];
	var resultItems = [];

	for (var i = 0; i < items.length; i++) {
		var nodeList = selector(items[i]);
		
		for (var j = 0; j < nodeList.length; j++) {
			resultItems.push(nodeList[j]);
		}
	};
	
	return { 
		sourceItems: resultItems,
		elements: elements,
		first: function () {	
			return {
				item: this.sourceItems[0],
				text: function() {	
					return this.item.innerHTML;
				}
			}		
		}
	};
}

var by = {
	tag: function(tagName) {
		return function(item) {
				return item.querySelectorAll(tagName);
			}
	},
	css: function(cssQuery) {
		return function(item) {
				return item.querySelectorAll(cssQuery);
			}
	},
	attr: function(attrName, attrValue) {
		return function(item) {
				return item.querySelectorAll('[' + attrName + '="' + attrValue + '"]');
			}
	}
}