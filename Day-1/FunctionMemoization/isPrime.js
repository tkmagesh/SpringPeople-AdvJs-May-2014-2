function isPrime(n){
	if (typeof isPrime[n] !== "undefined")	{
		console.log("From cache..");
		return isPrime[n];
	}
	isPrime[n] = true;
	for(var i=2;i<=(n/2);i++)
		if (n % i === 0){
			isPrime[n] = false;
			break;
		}
	console.log("Newly calculated..");
	return isPrime[n];
}


function getIsPrime(){
	var cache = {};
	function isPrime(n){
		if (typeof cache[n] !== "undefined")	{
			console.log("From cache..");
			return cache[n];
		}
		cache[n] = true;
		for(var i=2;i<=(n/2);i++)
			if (n % i === 0){
				cache[n] = false;
				break;
			}
		console.log("Newly calculated..");
		return cache[n];
	}
	return isPrime;
}

function isPrime(n){
	var cache = {};
	isPrime = function (n){
		if (typeof cache[n] !== "undefined")	{
			console.log("From cache..");
			return cache[n];
		}
		cache[n] = true;
		for(var i=2;i<=(n/2);i++)
			if (n % i === 0){
				cache[n] = false;
				break;
			}
		console.log("Newly calculated..");
		return cache[n];
	}
	return isPrime(n);
}