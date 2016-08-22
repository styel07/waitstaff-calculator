const earningsInfo = {
  bindings: {
    info: '<'
  },
  controller: function() {
    const ctrl = this;
    ctrl.greet = "My Earnings Info";
    ctrl.subTotal = 0;
    ctrl.tip = 0;
    ctrl.allMeals = ctrl.info;
    ctrl.sumTip = 0;
    ctrl.avgTip = 0;

    ctrl.computeTipTotal = function() {
      let total = ctrl.allMeals.forEach(function(meal) {
        console.log('sum: ', meal);
          ctrl.sumTip += meal.tip;
      }, this);

      return total;
    };

    ctrl.computeTipTotal = function() {
      ctrl.allMeals.forEach(function(meal) {
        console.log('sum: ', meal);
          ctrl.sumTip += meal.tip;
      }, this);
      console.log('Tip Total', ctrl.sumTip);
    };

  },
  template: `
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">{{$ctrl.greet}}</h3>
      </div>
      <div class="panel-body">
        <div class="row">
          Tip Total: <label for="">{{ $ctrl.sumTip }}</label>
        </div>
        <div class="row">
          Meal Count: <label for="">{{ $ctrl.allMeals.length }}</label>
        </div>
        <div class="row">
          Average Tip Per Meal: <label for="">{{ $ctrl.info.subTotal + $ctrl.info.tip }}</label>
        </div>
        <button ng-click="$ctrl.computeTipTotal()">compute Tip</button>
      </div>
    </div>
  `
};

module.exports = earningsInfo;
