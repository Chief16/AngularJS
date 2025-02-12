import * as ng from 'angular';

interface ICustomScope extends ng.IScope {
    vm: any;
}

export class MyController {
    // static $inject = ["$scope"];
    message: string = "Hello there! Welcome to world of AngularJS"
    users: any[] = [
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

    constructor(private $scope: ICustomScope) {
        $scope["vm"] = this;
    }

    userClicked(user: any){
        console.log(user)
    }

}