import { Crop } from './Crop';
import { Equipment } from './Equipment';
import { Staff } from './Staff';
import { CropDetails } from './CropDetails';

export class Field {
    fieldCode: string;
    fieldName: string;
    fieldLocation: { x: number; y: number };
    fieldSize: number;
    image1: string;
    image2: string;
    crop: Crop[];
    equipment: Equipment[];
    staff: Staff[];
    cropDetails: CropDetails[];

    constructor(
        fieldCode: string,
        fieldName: string,
        fieldLocation: { x: number; y: number },
        fieldSize: number,
        image1: string,
        image2: string,
        crop: Crop[],
        equipment: Equipment[],
        staff: Staff[],
        cropDetails: CropDetails[]
    ) {
        this.fieldCode = fieldCode;
        this.fieldName = fieldName;
        this.fieldLocation = fieldLocation;
        this.fieldSize = fieldSize;
        this.image1 = image1;
        this.image2 = image2;
        this.crop = crop;
        this.equipment = equipment;
        this.staff = staff;
        this.cropDetails = cropDetails;
    }
}