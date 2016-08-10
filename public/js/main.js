var mealDetails = require('./component/meal-details');
var customerCharges = require('./component/customer-charges');
var earningsInfo = require('./component/earnings-info');

const waitstaffCalculator = {
  controller: class waitstaffCalculatorController {
    assignMealInfo(info) {
      this.mealInfoDetails = info;
      console.log('stuff:', info);
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
          <customer-charges meal-info="$ctrl.mealInfoDetails"></customer-charges>
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
