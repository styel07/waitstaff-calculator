var mealDetails = {
  controller: function() {
    this.mealInfo = {};
    this.greet = "Enter the Meal Details";
    this.price = 9;
    this.tax = 4;
    this.tip = 2;

    var ctrl = this;

    this.submit = function(price,tax,tip) {
      ctrl.mealInfo = {
        price: price,
        tax: tax,
        tip: tip
      };
    };

    this.cancel = function() {
      ctrl.price = "";
      ctrl.tax = "";
      ctrl.tip = "";
    };
  },
  templateUrl:
  './public/view/meal-details.html'
};

var customerCharges = {
  bindings: {
    customerMealInfo: '<mealInfo'
  },
  controller: function() {
    console.log(this.customerMealInfo);
    this.greet = "Cusotomer Charges";
    this.tip = 0;
    this.mealCount = 0;
    this.averageTip = 0;
    // this.customerMealInfo = customerMealInfo;
  },
  templateUrl:
  './public/view/customer-charges.html'
};

var earningsInfo = {
  controller: function() {
    this.greet = "My Earnings Info";
    this.subTotal = 0;
    this.tip = 0;
    this.total = 0;
  },
  templateUrl:
  './public/view/earnings-info.html'
};

angular
.module('myApp',[])
.component('mealDetails', mealDetails)
.component('customerCharges', customerCharges)
.component('earningsInfo', earningsInfo);
