var mealDetails = {
  controller: function() {
    this.greet = "This is the meal Details";
    this.haloo = function() {
      alert('sawp brah');
    };
  },
  templateUrl:
  './public/view/meal-details.html'
};

var customerCharges = {
  controller: function() {
    this.greet = "This is the Cusotomer Charges";
  },
  templateUrl:
  './public/view/customer-charges.html'
};

var earningInfo = {
  controller: function() {
    this.greet = "EARNING INFO BRAH!";
  },
  templateUrl:
  './public/view/earnings-info.html'
};

angular
.module('myApp',[])
.component('mealDetails', mealDetails)
.component('customerCharges', customerCharges)
.component('earningInfo', earningInfo);
