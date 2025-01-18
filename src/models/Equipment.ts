import { Field } from './Field';
import { Staff } from './Staff';

export class Equipment {
    equipmentId: string;
    equipmentName: string;
    equipmentType: string;
    status: string;
    field?: Field;
    staff?: Staff;

    constructor(
        equipmentId: string,
        equipmentName: string,
        equipmentType: string,
        status: string,
        field?: Field,
        staff?: Staff
    ) {
        this.equipmentId = equipmentId;
        this.equipmentName = equipmentName;
        this.equipmentType = equipmentType;
        this.status = status;
        this.field = field;
        this.staff = staff;
    }
}