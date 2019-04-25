"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var BaseEntity_1 = require("typeorm/repository/BaseEntity");
var class_validator_1 = require("class-validator");
var Ad = /** @class */ (function (_super) {
    __extends(Ad, _super);
    function Ad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Ad.prototype, "id");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.Length(2, 25),
        typeorm_1.Column("text")
    ], Ad.prototype, "title");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.MinLength(5),
        typeorm_1.Column("text")
    ], Ad.prototype, "description");
    __decorate([
        class_validator_1.IsUrl(),
        typeorm_1.Column("text")
    ], Ad.prototype, "picture");
    __decorate([
        class_validator_1.IsNumber(),
        typeorm_1.Column("text")
    ], Ad.prototype, "price");
    __decorate([
        class_validator_1.IsEmail(),
        typeorm_1.Column("text")
    ], Ad.prototype, "email");
    __decorate([
        class_validator_1.IsNumber(),
        typeorm_1.Column("text")
    ], Ad.prototype, "phone");
    Ad = __decorate([
        typeorm_1.Entity()
    ], Ad);
    return Ad;
}(BaseEntity_1.BaseEntity));
exports["default"] = Ad;
