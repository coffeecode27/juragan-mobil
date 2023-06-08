import { LandVehicle, PrivateJet } from "./Vehicle";
import { VehiclePurchase } from "./VehiclePurchase";
import { VehicleSummary } from "./InfoSummary";
import { Report } from "./Report";

// Inisialisasi objek VehiclePurchase
const vehiclePurchase = new VehiclePurchase();

// Tambahkan kendaraan darat ke VehiclePurchase
vehiclePurchase.addVehicle(new LandVehicle("D 1001 UM", "SUV", 2010, 350000000, 4));
vehiclePurchase.addVehicle(new LandVehicle("D 1002 UM", "SUV", 2010, 350000000, 4));
vehiclePurchase.addVehicle(new LandVehicle("D 1003 UM", "SUV", 2015, 350000000, 5));
vehiclePurchase.addVehicle(new LandVehicle("D 1004 UM", "SUV", 2015, 350000000, 5));
vehiclePurchase.addVehicle(new LandVehicle("D 11 UK", "Taxi", 2002, 1750000, 4));
vehiclePurchase.addVehicle(new LandVehicle("D 12 UK", "Taxi", 2015, 2250000, 4));
vehiclePurchase.addVehicle(new LandVehicle("D 13 UK", "Taxi", 2020, 2750000, 4));

// Tambahkan private jet ke VehiclePurchase
vehiclePurchase.addVehicle(new PrivateJet("ID8089", "PrivateJet", 2015, 1500000000, 12));
vehiclePurchase.addVehicle(new PrivateJet("ID8099", "PrivateJet", 2018, 1750000000, 15));

/// Buat array vehicles dari vehiclePurchase
const vehicles = vehiclePurchase.getVehicles();

// Buat objek VehicleSummary dengan VehiclePurchase dan array vehicles sebagai parameter
const vehicleSummary = new VehicleSummary(vehiclePurchase, vehicles);

// Buat objek Report dengan VehiclePurchase sebagai parameter
const report = new Report(vehiclePurchase);

// Menggunakan objek VehicleSummary
const totalVehicles = vehicleSummary.getTotalVehicle();
console.log("Total Vehicles:", totalVehicles);

const suvCount = vehicleSummary.getTotalVehicleByType("SUV");
console.log("Total SUVs:", suvCount);

const taxiIncome = vehicleSummary.getTotalIncomeByVehicleType("Taxi");
console.log(`Total Income from Taxi: ${taxiIncome}`);

const SUVIncome = vehicleSummary.getTotalIncomeByVehicleType("SUV");
console.log(`Total Income from SUV: ${SUVIncome}`);

const privateJet = vehicleSummary.getTotalIncomeByVehicleType("PrivateJet");
console.log(`Total Income from PrivateJet: ${privateJet}`);

const totalIncome = vehicleSummary.getTotalIncome();
console.log("Total Income:", totalIncome);

// Generate laporan summary
report.generateSummaryReport();

// Generate laporan detail
report.generateDetailReport();
