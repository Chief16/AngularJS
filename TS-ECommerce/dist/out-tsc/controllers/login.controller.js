var LoginController = /** @class */ (function () {
    function LoginController($scope) {
        this.$scope = $scope;
        this.user = {
            email: "akash@gmail.com",
            password: "admin"
        };
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
    LoginController.prototype.validate = function () {
        var _this = this;
        var lUser = this.users.filter(function (u) { return u.email == _this.user.email; })[0] || null;
        if (lUser && lUser.password == this.user.password) {
            alert("Logged In Successfully");
        }
        else {
            alert("Authentication Failed!");
        }
    };
    return LoginController;
}());