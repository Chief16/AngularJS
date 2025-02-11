var app = angular.module("transflower", []);
app.controller("loginController", function($scope) {
    $scope.user = {
        email: "akash@gmail.com",
        password: "admin"
    }
    $scope.onValidate = () => {
        if($scope.user){
            console.log("Welcome");
        } else {
            console.log("Invalid User!");
        }
    }
})