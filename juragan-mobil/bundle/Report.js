"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Report = /** @class */ (function () {
    function Report(vehiclePurchase) {
        this.vehiclePurchase = vehiclePurchase;
    }
    Report.prototype.generateSummaryReport = function () {
        var totalVehicles = this.vehiclePurchase.getTotalVehicles();
        var totalIncome = this.vehiclePurchase.getTotalIncome();
        console.log("Summary Report");
        console.log("Total Vehicles: ", totalVehicles);
        console.log("Total Income: ", totalIncome);
    };
    Report.prototype.generateDetailReport = function () {
        var vehicles = this.vehiclePurchase.getVehicles();
        console.log("Detail Report");
        console.log("------------------------------");
        for (var _i = 0, vehicles_1 = vehicles; _i < vehicles_1.length; _i++) {
            var vehicle = vehicles_1[_i];
            console.log("No Police/No Register: ", vehicle.getNoPolice());
            console.log("Vehicle Type: ", vehicle.getVehicleType());
            console.log("Year: ", vehicle.getYear());
            console.log("Price: ", vehicle.getPrice());
            console.log("Seat: ", vehicle.getSeat());
            console.log("------------------------------");
        }
    };
    return Report;
}());
exports.Report = Report;
