import { Gender } from './Gender';
import { Role } from './Role';
import { Field } from './Field';
import { CropDetails } from './CropDetails';
import { Equipment } from './Equipment';
import { Vehicle } from './Vehicle';

export class Staff {
    id: string;
    firstName: string;
    lastName: string;
    designation: string;
    gender: Gender;
    joinedDate: Date;
    DOB: Date;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    addressLine4: string;
    addressLine5: string;
    contactNo: string;
    email: string;
    role: Role;
    field: Field[];
    cropDetails: CropDetails[];
    equipment: Equipment;
    vehicles: Vehicle[];

    constructor(
        id: string,
        firstName: string,
        lastName: string,
        designation: string,
        gender: Gender,
        joinedDate: Date,
        DOB: Date,
        addressLine1: string,
        addressLine2: string,
        addressLine3: string,
        addressLine4: string,
        addressLine5: string,
        contactNo: string,
        email: string,
        role: Role,
        field: Field[],
        cropDetails: CropDetails[],
        equipment: Equipment,
        vehicles: Vehicle[]
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
        this.gender = gender;
        this.joinedDate = joinedDate;
        this.DOB = DOB;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.addressLine3 = addressLine3;
        this.addressLine4 = addressLine4;
        this.addressLine5 = addressLine5;
        this.contactNo = contactNo;
        this.email = email;
        this.role = role;
        this.field = field;
        this.cropDetails = cropDetails;
        this.equipment = equipment;
        this.vehicles = vehicles;
    }
}