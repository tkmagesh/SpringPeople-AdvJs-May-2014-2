function SalaryCalculator(basic,hra,da,tax){
  this.basic = basic;
  this.hra = hra;
  this.da = da;
  this.salary = 0;
  this.tax = tax;
  this.calculate = function(){
     var gross = this.basic + this.hra + this.da;
     var net = gross * ((100-this.tax)/100);
     this.salary = net;
  }
}

function SalaryCalculator(basic,hra,da,tax){
  this.basic = basic;
  this.hra = hra;
  this.da = da;
  this.salary = 0;
  this.tax = tax;
}
SalaryCalculator.prototype.calculate = function(){
   var gross = this.basic + this.hra + this.da;
   var net = gross * ((100-this.tax)/100);
   this.salary = net;
}

var calc = new SalaryCalculator(10000,2000,3000,10);
calc.calculate();
console.log(calc.salary);


