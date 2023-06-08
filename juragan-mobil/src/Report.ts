import { VehiclePurchase } from "./VehiclePurchase";
import { InfoSummary } from "./InfoSummary";
import { Vehicle } from "./Vehicle";

 export class Report {
  private vehiclePurchase: VehiclePurchase;

  constructor(vehiclePurchase: VehiclePurchase) {
    this.vehiclePurchase = vehiclePurchase;
  }

  generateSummaryReport(): void {
    const totalVehicles = this.vehiclePurchase.getTotalVehicles();
    const totalIncome = this.vehiclePurchase.getTotalIncome();

    console.log("Summary Report");
    console.log("Total Vehicles: ", totalVehicles);
    console.log("Total Income: ", totalIncome);
  }

  generateDetailReport(): void {
    const vehicles = this.vehiclePurchase.getVehicles();

    console.log("Detail Report");
    console.log("------------------------------");

    for (const vehicle of vehicles) {
      console.log("No Police/No Register: ", vehicle.getNoPolice());
      console.log("Vehicle Type: ", vehicle.getVehicleType());
      console.log("Year: ", vehicle.getYear());
      console.log("Price: ", vehicle.getPrice());
      console.log("Seat: ", vehicle.getSeat());
      console.log("------------------------------");
    }
  }
}
