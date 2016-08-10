const mealDetails = {
  bindings: {
    onSubmit: '&' //output
  },
  controller: function() {
    this.mealInfo = { price: 9, tax: 2, tip:8 };
    this.greet = "Enter the Meal Details";
    this.price = 9;
    this.tax = 4;
    this.tip = 2;

    const ctrl = this;

    this.submit = function(price,tax,tip) {
      ctrl.mealInfo = {
        price: price,
        tax: tax,
        tip: tip
      };
      console.log('from submit: ',ctrl.mealInfo);
    };

    this.onSubmit({
      mealInfo: ctrl.mealInfo
    });

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
        <button type="button" name="btn-submit" ng-click="$ctrl.submit($ctrl.price ,$ctrl.tax, $ctrl.tip)">Submit</button>
        <button type="button" name="btn-cancel" ng-click="$ctrl.cancel()">Cancel</button>
      </div>
    </div>
  </div>
`
};

module.exports = mealDetails;
