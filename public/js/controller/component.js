const statefulComponent= {
  template: `
    <div>
      <stateless-component user='$ctrl.myUser'>
      </stateless-component>
    </div>
  `,
  controller() {
    this.user = {
      name: 'eL',
      location: 'studio'
    };
  }
};

const statelessComponent = {
  bindings: {
    myUser: '<user'
  },
  template: `
    <div>
      <p ng-repeat="item in $ctrl.stuff">{{ item }}</p>
      {{ $ctrl.myUser }}
    </div>
  `,
  controller() {
    this.stuff = [1,2,3,4];
  }
};

angular
  .module()
  .component('statefulComponent', statefulComponent)
  .component('statelessComponent', statelessComponent);
