var app = angular.module("transflower", []);
app.controller("loginController", function($scope) {
    $scope.user = {
        email: "akash@gmail.com",
        password: "admin"
    }
    $scope.users=[
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
    $scope.onValidate = () => {
        if($scope.user){
            console.log("Welcome");
        } else {
            console.log("Invalid User!");
        }
    }
})