import { VehiclePurchase } from "./VehiclePurchase";
import { Vehicle } from './Vehicle';

export interface InfoSummary {
  getTotalVehicle(): number;
  getTotalVehicleByType(vehicleType: string): number;
  getTotalIncomeByVehicleType(vehicleType: string): number;
  getTotalIncome(): number;
}

export class VehicleSummary implements InfoSummary {
  private vehiclePurchase: VehiclePurchase;
  private vehicles: Vehicle[]; 
  //array vehicles dalam contsructor yang akan menampung data yang bertipe "Vehicle"
  constructor(vehiclePurchase: VehiclePurchase, vehicles: Vehicle[]) {
    this.vehiclePurchase = vehiclePurchase;
    this.vehicles = vehicles;
  }

  public getTotalVehicle(): number {
    return this.vehiclePurchase.getTotalVehicles();
  }

  public getTotalVehicleByType(vehicleType: string): number {
    // Implementasikan logika penghitungan jumlah kendaraan berdasarkan jenis kendaraan tertentu
  let count = 0;
  for (const vehicle of this.vehicles) {
    if (vehicle.getVehicleType() === vehicleType) {
      count++;
    }
  }
  return count;
  }

  public getTotalIncomeByVehicleType(vehicleType: string): number {
    // Implementasikan logika penghitungan total pendapatan berdasarkan jenis kendaraan tertentu
    let totalIncome = 0;
  for (const vehicle of this.vehicles) {
    if (vehicle.getVehicleType() === vehicleType) {
      totalIncome += vehicle.getPrice();
    }
  }
  return totalIncome;
  }

  public getTotalIncome(): number {
    return this.vehiclePurchase.getTotalIncome();
  }
}
