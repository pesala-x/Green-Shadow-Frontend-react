import { Staff } from "./Staff.ts";

export class Vehicle {
    vehicleCode: string;
    licensePlateNumber: string;
    vehicleCategory: string;
    fuelType: string;
    status: string;
    remarks: string;
    staff: Staff;

    constructor(
        vehicleCode: string,
        licensePlateNumber: string,
        vehicleCategory: string,
        fuelType: string,
        status: string,
        remarks: string,
        staff: Staff
    ) {
        this.vehicleCode = vehicleCode;
        this.licensePlateNumber = licensePlateNumber;
        this.vehicleCategory = vehicleCategory;
        this.fuelType = fuelType;
        this.status = status;
        this.remarks = remarks;
        this.staff = staff;
    }
}