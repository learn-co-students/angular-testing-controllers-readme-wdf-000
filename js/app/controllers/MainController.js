function MainController() {
				var vm = this;
    vm.name = 'Steve Jobs';
}

angular
    .module('app')
    .controller('MainController', MainController);
