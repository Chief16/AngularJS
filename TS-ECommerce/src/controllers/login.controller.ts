import * as ng from 'angular';

interface ICustomScope extends ng.IScope {
    vm: any;
}

export class LoginController {
    user = {
        email: "akash@gmail.com",
        password: "admin"
    }
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

    validate(){
        const lUser = this.users.filter((u: any) => u.email == this.user.email)[0] || null;
        if(lUser && lUser.password == this.user.password){
            alert("Logged In Successfully");
        } else {
            alert("Authentication Failed!")
        }
    }

}