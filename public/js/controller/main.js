var mealDetails = {
  controller: function() {
    this.mealInfo = { price: 9, tax: 2, tip:8 };
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
    mealInfo: '<'
  },
  controller: function() {

    console.log('this',this.mealInfo);

    this.greet = "Cusotomer Charges";
    this.tip = 0;
    this.mealCount = 0;
    this.averageTip = 0;
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
