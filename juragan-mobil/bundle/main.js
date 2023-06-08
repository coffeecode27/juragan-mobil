"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle_1 = require("./Vehicle");
var VehiclePurchase_1 = require("./VehiclePurchase");
var InfoSummary_1 = require("./InfoSummary");
var Report_1 = require("./Report");
// Inisialisasi objek VehiclePurchase
var vehiclePurchase = new VehiclePurchase_1.VehiclePurchase();
// Tambahkan kendaraan darat ke VehiclePurchase
vehiclePurchase.addVehicle(new Vehicle_1.LandVehicle("D 1001 UM", "SUV", 2010, 350000000, 4));
vehiclePurchase.addVehicle(new Vehicle_1.LandVehicle("D 1002 UM", "SUV", 2010, 350000000, 4));
vehiclePurchase.addVehicle(new Vehicle_1.LandVehicle("D 1003 UM", "SUV", 2015, 350000000, 5));
vehiclePurchase.addVehicle(new Vehicle_1.LandVehicle("D 1004 UM", "SUV", 2015, 350000000, 5));
vehiclePurchase.addVehicle(new Vehicle_1.LandVehicle("D 11 UK", "Taxi", 2002, 1750000, 4));
vehiclePurchase.addVehicle(new Vehicle_1.LandVehicle("D 12 UK", "Taxi", 2015, 2250000, 4));
vehiclePurchase.addVehicle(new Vehicle_1.LandVehicle("D 13 UK", "Taxi", 2020, 2750000, 4));
// Tambahkan private jet ke VehiclePurchase
vehiclePurchase.addVehicle(new Vehicle_1.PrivateJet("ID8089", "PrivateJet", 2015, 1500000000, 12));
vehiclePurchase.addVehicle(new Vehicle_1.PrivateJet("ID8099", "PrivateJet", 2018, 1750000000, 15));
/// Buat array vehicles dari vehiclePurchase
var vehicles = vehiclePurchase.getVehicles();
// Buat objek VehicleSummary dengan VehiclePurchase dan array vehicles sebagai parameter
var vehicleSummary = new InfoSummary_1.VehicleSummary(vehiclePurchase, vehicles);
// Buat objek Report dengan VehiclePurchase sebagai parameter
var report = new Report_1.Report(vehiclePurchase);
// Menggunakan objek VehicleSummary
var totalVehicles = vehicleSummary.getTotalVehicle();
console.log("Total Vehicles:", totalVehicles);
var suvCount = vehicleSummary.getTotalVehicleByType("SUV");
console.log("Total SUVs:", suvCount);
var taxiIncome = vehicleSummary.getTotalIncomeByVehicleType("Taxi");
console.log("Total Income from Taxi: " + taxiIncome);
var SUVIncome = vehicleSummary.getTotalIncomeByVehicleType("SUV");
console.log("Total Income from SUV: " + SUVIncome);
var privateJet = vehicleSummary.getTotalIncomeByVehicleType("PrivateJet");
console.log("Total Income from PrivateJet: " + privateJet);
var totalIncome = vehicleSummary.getTotalIncome();
console.log("Total Income:", totalIncome);
// Generate laporan summary
report.generateSummaryReport();
// Generate laporan detail
report.generateDetailReport();
