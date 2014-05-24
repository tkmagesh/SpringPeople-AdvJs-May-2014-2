function Employee(id,firstName,salary){
  this.id = id;
  this.firstName = firstName;
  this.salary = salary;
}

/*Convert the "id", "firstName", "salary" to accessor functions with the following:
	1. id should be readonly
	2. firstName cannot be assigned an empty string
	3. salary cannot be assigned a value less than the current salary
*/

function Employee(id,firstName,salary){
  var _id = id,
      _firstName = firstName,
      _salary = salary;

  this.id = function(){
     return _id;
  };
  this.firstName = function(val){
     if (typeof val === "undefined") return _firstName;
     if (val !== "") _firstName = val;
  };
  this.salary = function(val){
     if (typeof val === "undefined") return _salary;
     if (val > _salary) _salary = val;
  }
}