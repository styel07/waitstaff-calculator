var mealDetails = require('./component/meal-details');
var customerCharges = require('./component/customer-charges');
var earningsInfo = require('./component/earnings-info');

const waitstaffCalculator = {
  controller: function() {
    var ctrl = this;
    ctrl.info = {};
    ctrl.allMeals = [];
    ctrl.price = 0;
    ctrl.tip = 0;
    ctrl.tax = 0;
    ctrl.computedData = {};

    ctrl.onSubmit = function(info) {
      ctrl.info = info;
      ctrl.allMeals.push(info);
      ctrl.computeTipTotal();
    };

    ctrl.computeTipTotal = function() {
      ctrl.sumTip = 0;

      ctrl.allMeals.forEach(function(meal) {
        // console.log('sum: ', meal);
          ctrl.sumTip += meal.tip;
      }, this);

      ctrl.computedData = {
        sumTipTotal: ctrl.sumTip,
        count: ctrl.allMeals.length,
        avgTipTotal: ctrl.sumTip / ctrl.allMeals.length
      };
    };

    ctrl.reset = function() {
      ctrl.info = {};
      ctrl.allMeals = [];
      ctrl.price = 0;
      ctrl.tip = 0;
      ctrl.tax = 0;
      ctrl.sumTip = 0;
      ctrl.avgTip = 0;
      ctrl.computedData = {};
    };

  },
  template: `
    <form name="myForm" ng-submit="$ctrl.submit()" novalidate>
      <div class="col-md-offset-1 col-md-4">
        <div class="row text-center">
          <meal-details on-submit="$ctrl.onSubmit({price: price, tax: tax, tip: tip, subTotal: subTotal})"></meal-details>
        </div>
        <div class="row">
          <button ng-click="$ctrl.reset()">Reset</button>
        </div>
      </div>
      <div class="col-md-offset-1 col-md-4">
        <div class="row text-center">
          <customer-charges info="$ctrl.info"></customer-charges>
        </div>
        <div class="row text-center">
          <earnings-info info="$ctrl.computedData"></earnings-info>
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
