const earningsInfo = {
  bindings: {
    info: '<'
  },
  controller: function() {
    this.greet = "My Earnings Info";
    this.subTotal = 0;
    this.tip = 0;

  },
  template: `
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">{{$ctrl.greet}}</h3>
      </div>
      <div class="panel-body">
        <div class="row">
          Subtotal: <label for="">{{$ctrl.info.subTotal}}</label>
        </div>
        <div class="row">
          Tip: <label for="">{{$ctrl.info.tip}}</label>
        </div>
        <div class="row">
          Total: <label for="">{{$ctrl.info.subTotal + $ctrl.info.tip}}</label>
        </div>
      </div>
    </div>
  `
};

module.exports = earningsInfo;
