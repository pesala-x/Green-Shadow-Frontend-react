import { Field } from './Field';
import { CropDetails } from './CropDetails';

export class Crop {
    cropCode: string;
    cropCommonName: string;
    cropScientificName: string;
    cropImage: string;
    category: string;
    cropSeason: string;
    field: Field;
    cropDetails: CropDetails[];

    constructor(
        cropCode: string,
        cropCommonName: string,
        cropScientificName: string,
        cropImage: string,
        category: string,
        cropSeason: string,
        field: Field,
        cropDetails: CropDetails[]
    ) {
        this.cropCode = cropCode;
        this.cropCommonName = cropCommonName;
        this.cropScientificName = cropScientificName;
        this.cropImage = cropImage;
        this.category = category;
        this.cropSeason = cropSeason;
        this.field = field;
        this.cropDetails = cropDetails;
    }
}