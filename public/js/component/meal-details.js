const mealDetails = {
  bindings: {
    onSubmit: '&' //output
  },
  controller: function() {
    // this.mealInfo = {};
    this.greet = "Enter the Meal Details";
    this.price = 9;
    this.tax = 4;
    this.tip = 2;

    const ctrl = this;

    this.submit = function() {
      ctrl.onSubmit({
        price: ctrl.price,
        tax: ctrl.tax,
        tip: ctrl.tip,
        subTotal: ctrl.price + ctrl.tax
      });
    };

    this.cancel = function() {
      ctrl.price = "";
      ctrl.tax = "";
      ctrl.tip = "";
    };

  },
  template: `
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title">{{$ctrl.greet}}</h3>
    </div>
    <div class="panel-body">
      <div class="row">
      <div class="col-md-6 text-right">
        Base Meal Price: $
      </div>
      <div class="col-md-6 text-left">
        <input type="number" name="price" ng-model="$ctrl.price" placeholder="Price">
      </div>
      </div>
      <div class="row">
        Tax Rate: % <input type="number" name="tax" ng-model="$ctrl.tax" placeholder="Tax Rate">
      </div>
      <div class="row">
        Tip Percentage: % <input type="number" name="tip" ng-model="$ctrl.tip" placeholder="Tip Percentage">
      </div>
      <div class="row">
        <button type="button" name="btn-submit" ng-click="$ctrl.submit()">Submit</button>
        <button type="button" name="btn-cancel" ng-click="$ctrl.cancel()">Cancel</button>
      </div>
    </div>
  </div>
`
};

module.exports = mealDetails;
