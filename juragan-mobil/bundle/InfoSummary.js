"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VehicleSummary = /** @class */ (function () {
    //array vehicles dalam contructor yang akan menampung data yang bertipe "Vehicle"
    function VehicleSummary(vehiclePurchase, vehicles) {
        this.vehiclePurchase = vehiclePurchase;
        this.vehicles = vehicles;
    }
    VehicleSummary.prototype.getTotalVehicle = function () {
        return this.vehiclePurchase.getTotalVehicles();
    };
    VehicleSummary.prototype.getTotalVehicleByType = function (vehicleType) {
        // Implementasikan logika penghitungan jumlah kendaraan berdasarkan jenis kendaraan tertentu
        var count = 0;
        for (var _i = 0, _a = this.vehicles; _i < _a.length; _i++) {
            var vehicle = _a[_i];
            if (vehicle.getVehicleType() === vehicleType) {
                count++;
            }
        }
        return count;
    };
    VehicleSummary.prototype.getTotalIncomeByVehicleType = function (vehicleType) {
        // Implementasikan logika penghitungan total pendapatan berdasarkan jenis kendaraan tertentu
        var totalIncome = 0;
        for (var _i = 0, _a = this.vehicles; _i < _a.length; _i++) {
            var vehicle = _a[_i];
            if (vehicle.getVehicleType() === vehicleType) {
                totalIncome += vehicle.getPrice();
            }
        }
        return totalIncome;
    };
    VehicleSummary.prototype.getTotalIncome = function () {
        return this.vehiclePurchase.getTotalIncome();
    };
    return VehicleSummary;
}());
exports.VehicleSummary = VehicleSummary;
