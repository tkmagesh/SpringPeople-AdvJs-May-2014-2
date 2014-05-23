window.addEventListener("DOMContentLoaded",function(){
	test("Should be able to add two numbers",function(){
		//arrange
		var number1 = 10,
			number2 = 20,
			expectedResult = 30;

		//act
		var result = add(number1,number2);

		//assert
		return result === expectedResult;
	});

	test("Should be able to add two numbers in string format",function(){
		//arrange
		var number1 = "10",
			number2 = "20",
			expectedResult = 30;

		//act
		var result = add(number1,number2);

		//assert
		return result === expectedResult;
	});
	test("Should be able to treat non numeric string as zero",function(){
		//arrange
		var number1 = "10",
			number2 = "abc",
			expectedResult = 10;

		//act
		var result = add(number1,number2);

		//assert
		return result === expectedResult;
	});
	test("Should be able to add functions returning numbers",function(){
		//arrange
		var f1 = function(){ return 10; },
			f2 = function(){ return 20;},
			expectedResult = 30;

		//act
		var result = add(f1,f2);

		//assert
		return result === expectedResult;
	});
	test("Should be able to treat non-numeric string returned by functions as zero ",function(){
		//arrange
		var f1 = function(){ return 10; },
			f2 = function(){ return "abc";},
			expectedResult = 10;

		//act
		var result = add(f1,f2);

		//assert
		return result === expectedResult;
	});
	
	test("Should be able to add array of numbers",function(){
		//arrange
		var numbers1 = [10,20, 30, 40],
			expectedResult = 100;

		//act
		var result = add(numbers1);

		//assert
		return result === expectedResult;
	});
	test("Should be able to add array of functions returning numbers",function(){
		//arrange
		var f1 = function(){ return 10; },
			f2 = function(){ return 20;},
			arrayOfFunctions = [f1,f2],
			expectedResult = 30;

		//act
		var result = add(arrayOfFunctions);

		//assert
		return result === expectedResult;
	});
	test("Should be able to add array of functions returning array of numbers",function(){
		//arrange
		var f1 = function(){ return [10,20]; },
			f2 = function(){ return [30,40];},
			arrayOfFunctions = [f1,f2],
			expectedResult = 100;

		//act
		var result = add(arrayOfFunctions);

		//assert
		return result === expectedResult;
	});
	test("Should be able to add nested array of numbers",function(){
		//arrange
		var numbers1 = [10,[20, [30, [40]]]],
			expectedResult = 100;

		//act
		var result = add(numbers1);

		//assert
		return result === expectedResult;
	});
	test("Should be able to add multiple array of numbers",function(){
		//arrange
		var numbers1 = [10,20],
			numbers2 = [30,40],
			expectedResult = 100;

		//act
		var result = add(numbers1, numbers2);

		//assert
		return result === expectedResult;
	});
	test("Should be able to add just one number",function(){
		//arrange
		var n1 = 10,
			expectedResult = 10;

		//act
		var result = add(n1);

		//assert
		return result === expectedResult;
	});
	test("Should return zero for no arguments",function(){
		//arrange
		var expectedResult = 0;

		//act
		var result = add();

		//assert
		return result === expectedResult;
	});

	test("Should be able to add varying number of numbers",function(){
		//arrange
		var	expectedResult = 150;

		//act
		var result = add(10,20,30,40,50);

		//assert
		return result === expectedResult;
	});






})