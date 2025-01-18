import { Field } from './Field';
import { Crop } from './Crop';
import { Staff } from './Staff';

export class CropDetails {
    logCode: string;
    logDate: Date;
    logDetails: string;
    observedImage: string;
    field: Field[];
    crop: Crop[];
    staff: Staff[];

    constructor(
        logCode: string,
        logDate: Date,
        logDetails: string,
        observedImage: string,
        field: Field[],
        crop: Crop[],
        staff: Staff[]
    ) {
        this.logCode = logCode;
        this.logDate = logDate;
        this.logDetails = logDetails;
        this.observedImage = observedImage;
        this.field = field;
        this.crop = crop;
        this.staff = staff;
    }
}