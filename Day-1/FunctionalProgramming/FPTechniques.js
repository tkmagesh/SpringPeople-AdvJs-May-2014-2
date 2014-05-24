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

function filter(list,predicate){
  var result = [];
  for(var i=0;i<list.length;i++)
     if (predicate(list[i])) result.push(list[i]);
  return result;
}

function min(list,attrName){
	var result = list[0][attrName];
	for(var i=1;i<list.length;i++) 
		if (list[i][attrName] < result) result = list[i][attrName];
	return result;
}

function max(list,attrName){
	var result = list[0][attrName];
	for(var i=1;i<list.length;i++) 
		if (list[i][attrName] > result) result = list[i][attrName];
	return result;
}

function sum(list,attrName){
	var result = 0;
	for(var i=0;i<list.length;i++) 
		result += list[i][attrName];
	return result;
}

function countBy(list,predicate){
	var result = 0;
	for(var i=0;i<list.length;i++) 
		if (predicate(list[i])) ++result;
	return result;
}

function all(list,predicate){
	for(var i=0;i<list.length;i++) 
		if (!predicate(list[i])) return false;
	return true;
}

function any(list,predicate){
	for(var i=0;i<list.length;i++) 
		if (predicate(list[i])) return true;
	return false;
}

function groupBy(list,selector){
	var result = {};
	var selectorFn = typeof selector === "function" ? selector : function(item){ return item[selector];};
	for(var i=0;i<list.length;i++){
		var key = selectorFn(list[i]);
		result[key] = result[key] || [];
		result[key].push(list[i]);
	}
	return result;
}


/*
min
max
sum
avg
countBy
all
any
groupBy

join
*/

var categories = [
	{id : 1, name : "grocery"},
	{id : 2, name : "stationary"},
]

function join(leftList, rightList, leftKeyName, rightKeyName, transformerFn){
	var result = [];
	for(var i=0;i<leftList.length;i++){
		var leftKey = leftList[i][leftKeyName];
		for(var j=0;j<rightList.length;j++){
			var rightKey = rightList[j][rightKeyName];
			if (leftKey === rightKey){
				var resultObj = transformerFn(leftList[i],rightList[j]);
				result.push(resultObj);
			}
		}
	}
	return result;
}

var productsWithCategoryName = join(products,categories,"category","id", function(p,c){
  return { id : p.id, name : p.name, value : p.units * p.cost, category : c.name };
});