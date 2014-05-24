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