import * as angular from "angular";
import { ProductController } from "../controllers/product.controller";

angular.module("ProductModule", []).controller("productController", ProductController);