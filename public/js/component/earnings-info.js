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

  },
  template: `
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">{{$ctrl.greet}}</h3>
      </div>
      <div class="panel-body">
        <div class="row">
          Tip Total: $<label for="">{{ $ctrl.info.sumTipTotal }}</label>
        </div>
        <div class="row">
          Meal Count: <label for="">{{ $ctrl.info.count }}</label>
        </div>
        <div class="row">
          Average Tip Per Meal: $<label for="">{{ $ctrl.info.avgTipTotal }}</label>
        </div>
      </div>
    </div>
  `
};

module.exports = earningsInfo;
