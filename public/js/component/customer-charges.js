const customerCharges = {
  bindings: {
    mealInfo: '<' // output / < input
  },
  controller: function() {
    // this.mealInfo = this.mealInfo;
    // console.log('this is from customer charges',this.mealInfo.price);
    this.mealInfo = {mealinfo};
    this.greet = "Cusotomer Charges";
    this.subTotal = this.mealInfo.price + this.mealInfo.tax
    this.total = this.subTotal + this.mealInfo.tip;
    console.log('subTotal', this.mealInfo);
  },
  template:`
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">{{$ctrl.greet}}</h3>
      </div>
      <div class="panel-body">
        <div class="row">
          Subtotal: $ <label for="">{{ $ctrl.mealInfo.price }}</label>
        </div>
        <div class="row">
          Tip: <label for="">{{ $ctrl.mealInfo.tip }}</label>
        </div>
        <div class="row">
          Total: <label for="">{{ $ctrl.total }}</label>
        </div>
      </div>
    </div>
  `
};

module.exports = customerCharges;
