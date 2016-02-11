(function () {
    var appName = "myApp";
    var myApp = angular.module(appName, ['ngCart']);
    myApp.controller('myCtrl', ['$scope', '$http', 'ngCart', function ($scope, $http, ngCart) {
            ngCart.setTaxRate(7.5);
            ngCart.setShipping(2.99);
        }]);
    //wait until the document loads
    angular.element(document).ready(function () {
        // manually boostrap angular 
        angular.bootstrap(document, [appName]);
    });
})();
//# sourceMappingURL=app.js.map