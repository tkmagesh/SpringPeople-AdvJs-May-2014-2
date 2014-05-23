var products = [
	{id : 6, name: "pen", cost : 70, units : 10, category : 1},
	{id : 3, name: "hen", cost : 40, units : 60, category : 2},
	{id : 9, name: "ten", cost : 30, units : 30, category : 1},
	{id : 2, name: "len", cost : 50, units : 40, category : 2},
	{id : 7, name: "den", cost : 20, units : 20, category : 2},
	{id : 5, name: "zen", cost : 60, units : 90, category : 1}
]

function sort(items,attrName){
	for(var i=0;i<items.length-1;i++)
		for(var j=i+1;j<items.length;j++){
			if (items[i][attrName] > items[j][attrName]){
				var temp = items[i];
				items[i] = items[j];
				items[j] = temp;
			}
		}
}

function sort(items,comparerFn){
	for(var i=0;i<items.length-1;i++)
		for(var j=i+1;j<items.length;j++){
			if (comparerFn(items[i], items[j]) > 0){
				var temp = items[i];
				items[i] = items[j];
				items[j] = temp;
			}
		}
}

function productComparerByValue(p1,p2){
  var leftValue = p1.units * p1.cost,
      rightValue = p2.units * p2.cost;
  if (leftValue > rightValue) return 1;
  if (leftValue < rightValue) return -1;
  return 0;
}

function sort(items,comparer){
	var comparerFn = typeof comparer === "function" ? comparer : function(item1, item2){
		if (item1[comparer] > item2[comparer]) return 1;
		if (item1[comparer] < item2[comparer]) return -1;
		return 0
	};
	for(var i=0;i<items.length-1;i++)
		for(var j=i+1;j<items.length;j++){
			if (comparerFn(items[i], items[j]) > 0){
				var temp = items[i];
				items[i] = items[j];
				items[j] = temp;
			}
		}
}
