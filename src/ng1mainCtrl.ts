function ng1MainCtrl ($scope, $rootScope, $state, $cookies, AuthService, glScopeAccessService) {
    var ng1Main = this;

    ng1Main.message= "Hello world AngularJS";

    return ng1Main;

};

ng1MainCtrl.$inject = ['$scope', '$rootScope'];

export default (ngModule) => {
    return ngModule.controller('ng1MainCtrl', ng1MainCtrl);
}
