"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VehiclePurchase = /** @class */ (function () {
    function VehiclePurchase() {
        this.vehicles = [];
    }
    VehiclePurchase.prototype.addVehicle = function (vehicle) {
        this.vehicles.push(vehicle);
    };
    VehiclePurchase.prototype.getTotalVehicles = function () {
        return this.vehicles.length;
    };
    VehiclePurchase.prototype.getTotalIncome = function () {
        var totalIncome = 0;
        for (var _i = 0, _a = this.vehicles; _i < _a.length; _i++) {
            var vehicle = _a[_i];
            totalIncome += vehicle.getPrice();
        }
        return totalIncome;
    };
    VehiclePurchase.prototype.getTotalIncomeByVehicleType = function (vehicleType) {
        var totalIncome = 0;
        for (var _i = 0, _a = this.vehicles; _i < _a.length; _i++) {
            var vehicle = _a[_i];
            if (!vehicleType || vehicle.getVehicleType() === vehicleType) {
                totalIncome += vehicle.getPrice();
            }
        }
        return totalIncome;
    };
    VehiclePurchase.prototype.getVehicles = function () {
        return this.vehicles;
    };
    return VehiclePurchase;
}());
exports.VehiclePurchase = VehiclePurchase;
