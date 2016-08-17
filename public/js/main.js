var mealDetails = require('./component/meal-details');
var customerCharges = require('./component/customer-charges');
var earningsInfo = require('./component/earnings-info');

const waitstaffCalculator = {
  // controller: class waitstaffCalculatorController {
  //   ctrl = this;
  controller: function() {
    const ctrl = this;
    this.info = {};

    this.assignMealInfo = function(info) {
      ctrl.info = info;
      // console.log('stuff:', info);
    }

    this.getMealInfo = function() {
      // console.log('this is the stuff:', ctrl.info);
      return ctrl.info;
    }

  },
  template: `
    <form name="myForm" ng-submit="$ctrl.submit()" novalidate>
      <div class="col-md-offset-1 col-md-4">
        <div class="row text-center">
          <meal-details on-submit="$ctrl.assignMealInfo(mealInfo)"></meal-details>
        </div>
      </div>
      <div class="col-md-offset-1 col-md-4">
        <div class="row text-center">
          <customer-charges meal-info="$ctrl.getMealInfo()"></customer-charges>
        </div>
        <div class="row text-center">
          <earnings-info></earnings-info>
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
