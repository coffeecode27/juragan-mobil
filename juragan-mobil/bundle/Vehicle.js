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
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle = /** @class */ (function () {
    function Vehicle(noPolice, vehicleType, year, price, seat) {
        this.noPolice = noPolice;
        this.vehicleType = vehicleType;
        this.year = year;
        this.price = price;
        this.seat = seat;
    }
    Vehicle.prototype.getNoPolice = function () {
        return this.noPolice;
    };
    Vehicle.prototype.getVehicleType = function () {
        return this.vehicleType;
    };
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.getPrice = function () {
        return this.price;
    };
    Vehicle.prototype.getSeat = function () {
        return this.seat;
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
var LandVehicle = /** @class */ (function (_super) {
    __extends(LandVehicle, _super);
    function LandVehicle(noPolice, vehicleType, year, price, seat) {
        return _super.call(this, noPolice, vehicleType, year, price, seat) || this;
    }
    return LandVehicle;
}(Vehicle));
exports.LandVehicle = LandVehicle;
var PrivateJet = /** @class */ (function (_super) {
    __extends(PrivateJet, _super);
    function PrivateJet(noPolice, vehicleType, year, price, seat) {
        return _super.call(this, noPolice, vehicleType, year, price, seat) || this;
    }
    return PrivateJet;
}(Vehicle));
exports.PrivateJet = PrivateJet;
