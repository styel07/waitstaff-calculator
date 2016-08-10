const customerCharges = {
  bindings: {
    mealInfo: '<' // output / < input
  },
  controller: function() {

    console.log('this is from customer charges',this.mealInfo);

    this.greet = "Cusotomer Charges";
    this.tip = 0;
    this.mealCount = 0;
    this.averageTip = 0;
  },
  template:`
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">{{$ctrl.greet}}</h3>
      </div>
      <div class="panel-body">
        <div class="row">
          Tip Total: <label for="">{{ $ctrl.mealInfo }}</label>
        </div>
        <div class="row">
          Meal Count: <label for="">{{$ctrl.mealCount}}</label>
        </div>
        <div class="row">
          Average Tip Per Meal: <label for="">{{ $ctrl.mealInfo.tip }}</label>
        </div>
      </div>
    </div>
  `
};

module.exports = customerCharges;
