export class Vehicle {
    private noPolice: string;
    private vehicleType: string;
    private year: number;
    private price: number;
    private seat: number;
  
    constructor(noPolice: string, vehicleType: string, year: number, price: number, seat: number) {
      this.noPolice = noPolice;
      this.vehicleType = vehicleType;
      this.year = year;
      this.price = price;
      this.seat = seat;
    }
  
    public getNoPolice(): string {
      return this.noPolice;
    }
  
    public getVehicleType(): string {
      return this.vehicleType;
    }
  
    public getYear(): number {
      return this.year;
    }
  
    public getPrice(): number {
      return this.price;
    }
  
    public getSeat(): number {
      return this.seat;
    }
  }
  
  export class LandVehicle extends Vehicle {
    constructor(noPolice: string, vehicleType: string, year: number, price: number, seat: number) {
      super(noPolice, vehicleType, year, price, seat);
    }
  }
  
   export class PrivateJet extends Vehicle {
    constructor(noPolice: string, vehicleType: string, year: number, price: number, seat: number) {
      super(noPolice, vehicleType, year, price, seat);
    }
  }