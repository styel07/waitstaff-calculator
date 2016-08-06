var mealDetails = {
  controller: function() {
    this.greet = "This is the meal Details";
    this.price = "9";
    this.tax = "4";
    this.tip = "2";

    var ctrl = this;

    this.submit = function() {
      alert('submit');
    };

    this.cancel = function() {
      ctrl.price = "";
      ctrl.tax = "";
      ctrl.tip = "";
    }
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

var earningsInfo = {
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
.component('earningsInfo', earningsInfo);
