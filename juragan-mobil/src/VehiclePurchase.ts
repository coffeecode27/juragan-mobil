import { Vehicle } from "./Vehicle";

export class VehiclePurchase {
  private vehicles: Vehicle[];

  constructor() {
    this.vehicles = [];
  }

  public addVehicle(vehicle: Vehicle): void {
    this.vehicles.push(vehicle);
  }

  public getTotalVehicles(): number {
    return this.vehicles.length;
  }

  public getTotalIncome(): number {
    let totalIncome = 0;
    for (const vehicle of this.vehicles) {
      totalIncome += vehicle.getPrice();
    }
    return totalIncome;
  }

  public getTotalIncomeByVehicleType(vehicleType?: string): number {
    let totalIncome = 0;
    for (const vehicle of this.vehicles) {
      if (!vehicleType || vehicle.getVehicleType() === vehicleType) {
        totalIncome += vehicle.getPrice();
      }
    }
    return totalIncome;
  }

  public getVehicles(): Vehicle[] {
    return this.vehicles;
  }
}
