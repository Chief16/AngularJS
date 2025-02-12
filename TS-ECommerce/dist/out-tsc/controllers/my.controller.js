var MyController = /** @class */ (function () {
    function MyController($scope) {
        this.$scope = $scope;
        // static $inject = ["$scope"];
        this.message = "Hello there! Welcome to world of AngularJS";
        this.users = [
            {
                email: "akash@gmail.com",
                password: "admin"
            },
            {
                email: "test@gmail.com",
                password: "admin"
            },
            {
                email: "john@gmail.com",
                password: "admin"
            },
            {
                email: "user@gmail.com",
                password: "admin"
            }
        ];
        $scope["vm"] = this;
    }
    MyController.prototype.userClicked = function (user) {
        console.log(user);
    };
    return MyController;
}());
