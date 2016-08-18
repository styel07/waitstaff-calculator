var mealDetails = require('./component/meal-details');
var customerCharges = require('./component/customer-charges');
var earningsInfo = require('./component/earnings-info');

const waitstaffCalculator = {
  controller: function() {
    var ctrl = this;
    this.info = {};
    this.price = 0;
    this.tip = 0;
    this.tax = 0;

    this.onSubmit = function(info) {
      console.log(info);
      ctrl.info = info
    }

  },
  template: `
    <form name="myForm" ng-submit="$ctrl.submit()" novalidate>
      <div class="col-md-offset-1 col-md-4">
        <div class="row text-center">
          <meal-details on-submit="$ctrl.onSubmit({price: price, tax: tax, tip: tip, subTotal: subTotal})"></meal-details>
        </div>
      </div>
      <div class="col-md-offset-1 col-md-4">
        <div class="row text-center">
          <customer-charges info="$ctrl.info"></customer-charges>
        </div>
        <div class="row text-center">
          <earnings-info info="$ctrl.info"></earnings-info>
        </div>
      </div>
    </form>
  `
};

angular
.module('myApp',[])
.component('waitstaffCalculator',waitstaffCalculator)
.component('mealDetails', mealDetails)
.component('customerCharges', customerCharges)
.component('earningsInfo', earningsInfo);
