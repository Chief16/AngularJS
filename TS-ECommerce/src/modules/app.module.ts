import * as angular from "angular";
import { MyController } from "../controllers/my.controller";

angular.module("app", ["LoginModule", "ProductModule"]);
angular.module("app").controller("myController", MyController);
