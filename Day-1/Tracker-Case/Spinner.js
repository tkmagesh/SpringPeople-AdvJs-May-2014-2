function getSpinner(){
	var counter = 0;
	function upFn(){
		return ++counter;
	}
	function downFn(){
		return --counter;
	}
	return {
		up : upFn,
		down : downFn
	}
}

var spinner = getSpinner()
