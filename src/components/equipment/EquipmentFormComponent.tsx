import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Equipment} from "../../models/equipment";
import {addEquipment, deleteEquipment, updateEquipment} from "../../reducers/EquipmentSlice";
import {Field} from "../../models/field";
import {Staff} from "../../models/staff";
import {EquipmentTableComponent} from "./EquipmentTableComponent.tsx";

export const EquipmentFormComponent = () => {
    const dispatch = useDispatch();
    const equipments = useSelector((state: any) => state.equipment);
    const fields = useSelector((state: any) => state.field);
    const staff = useSelector((state: any) => state.staff);

    const [equipmentId, setEquipmentId] = useState("");
    const [equipmentName, setEquipmentName] = useState("");
    const [equipmentType, setEquipmentType] = useState("");
    const [status, setStatus] = useState("");
    const [fieldCode, setFieldCode] = useState("");
    const [fieldName, setFieldName] = useState("");
    const [staffId, setStaffId] = useState("");
    const [staffFirstName, setStaffFirstName] = useState("");

    const equipmentTypes = ["Electrical", "Mechanical"];
    const equipmentStatuses = ["Available", "Out of Service"];

    const handleFieldCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedFieldCode = e.target.value;
        setFieldCode(selectedFieldCode);

        const field = fields.find((f: Field) => f.field_code === selectedFieldCode);
        setFieldName(field ? field.field_name : "");
    };

    const handleStaffIdChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedStaffId = e.target.value;
        setStaffId(selectedStaffId);

        const staffMember = staff.find((s: Staff) => s.staff_id === selectedStaffId);
        setStaffFirstName(staffMember ? staffMember.first_name : "");
    };

    const handleEquipmentOperation = (type: string) => {
        if (!equipmentId) {
            alert("Please enter an equipment ID.");
            return;
        }

        const equipment = equipments.find((e: Equipment) => e.equipment_id === equipmentId);
        if (type === "DELETE_EQUIPMENT" && !equipment) {
            alert("Equipment not found.");
            return;
        }

        const newEquipment: Equipment = {
            equipment_id: equipmentId,
            equipment_name: equipmentName,
            equipment_type: equipmentType,
            status,
            field: fieldName,
            staff: staffFirstName,
        };

        switch (type) {
            case "ADD_EQUIPMENT":
                dispatch(addEquipment(newEquipment));
                break;
            case "UPDATE_EQUIPMENT":
                dispatch(updateEquipment(newEquipment));
                break;
            case "DELETE_EQUIPMENT":
                dispatch(deleteEquipment(equipmentId));
                break;
            default:
                break;
        }
        clearForm();
    };

    const handleSearch = () => {
        const equipment = equipments.find((e: Equipment) => e.equipment_id === equipmentId);
        if (equipment) {
            setEquipmentName(equipment.equipment_name);
            setEquipmentType(equipment.equipment_type);
            setStatus(equipment.status);
            setFieldCode(equipment.field);
            setFieldName(equipment.field);
            setStaffId(equipment.staff);
            setStaffFirstName(equipment.staff);
        } else {
            alert("Equipment not found.");
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };

    const clearForm = () => {
        setEquipmentId("");
        setEquipmentName("");
        setEquipmentType("");
        setStatus("");
        setFieldCode("");
        setFieldName("");
        setStaffId("");
        setStaffFirstName("");
    };

    return (
        <>
            <form className="mx-2 mt-4 p-4">
                <div className="grid gap-6 mb-6 grid-cols-1 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="equipment_id"
                            className="block mb-2 text-base font-medium text-blue-700 shadow-sm"
                        >
                            Equipment ID
                        </label>
                        <input
                            type="text"
                            id="equipment_id"
                            value={equipmentId}
                            onChange={(e) => setEquipmentId(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="w-full p-2 border rounded border-gray-300"
                            placeholder="E123"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="equipment_name"
                            className="block mb-2 text-base font-medium text-blue-700 shadow-sm"
                        >
                            Equipment Name
                        </label>
                        <input
                            type="text"
                            id="equipment_name"
                            value={equipmentName}
                            onChange={(e) => setEquipmentName(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            placeholder="Tractor"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="equipment_type"
                            className="block mb-2 text-base font-medium text-blue-700 shadow-sm"
                        >
                            Equipment Type
                        </label>
                        <select
                            id="equipment_type"
                            value={equipmentType}
                            onChange={(e) => setEquipmentType(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            required
                        >
                            <option value="">Select Equipment Type</option>
                            {equipmentTypes.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="status"
                            className="block mb-2 text-base font-medium text-blue-700 shadow-sm"
                        >
                            Status
                        </label>
                        <select
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            required
                        >
                            <option value="">Select Status</option>
                            {equipmentStatuses.map((stat) => (
                                <option key={stat} value={stat}>
                                    {stat}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="field_code"
                            className="block mb-2 text-base font-medium text-blue-700 shadow-sm"
                        >
                            Field Code
                        </label>
                        <select
                            id="field_code"
                            value={fieldCode}
                            onChange={handleFieldCodeChange}
                            className="w-full p-2 border rounded border-gray-300"
                            required
                        >
                            <option value="">Select Field Code</option>
                            {fields.map((field: Field) => (
                                <option key={field.field_code} value={field.field_code}>
                                    {field.field_code}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="field_name"
                            className="block mb-2 text-base font-medium text-blue-700 shadow-sm"
                        >
                            Field Name
                        </label>
                        <input
                            type="text"
                            value={fieldName}
                            readOnly
                            className="w-full p-2 border rounded border-gray-300"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="staff_id"
                            className="block mb-2 text-base font-medium text-blue-700 shadow-sm"
                        >
                            Staff ID
                        </label>
                        <select
                            id="staff_id"
                            value={staffId}
                            onChange={handleStaffIdChange}
                            className="w-full p-2 border rounded border-gray-300"
                            required
                        >
                            <option value="">Select Staff ID</option>
                            {staff.map((s: Staff) => (
                                <option key={s.staff_id} value={s.staff_id}>
                                    {s.staff_id}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="staff_first_name"
                            className="block mb-2 text-base font-medium text-blue-700 shadow-sm"
                        >
                            Staff First Name
                        </label>
                        <input
                            type="text"
                            value={staffFirstName}
                            readOnly
                            className="w-full p-2 border rounded border-gray-300"
                        />
                    </div>
                </div>

                <div className="flex gap-4 justify-start mx-2 mt-8">
                    <button
                        type="button"
                        onClick={() => handleEquipmentOperation("ADD_EQUIPMENT")}
                        className="px-5 py-2 text-sm font-medium text-gray-800 bg-yellow-200 rounded-lg shadow-md border border-yellow-400 hover:bg-yellow-300"
                    >
                        Add Equipment
                    </button>
                    <button
                        type="button"
                        onClick={() => handleEquipmentOperation("UPDATE_EQUIPMENT")}
                        className="px-5 py-2 text-sm font-medium text-gray-800 bg-green-200 rounded-lg shadow-md border border-green-400 hover:bg-green-300"
                    >
                        Update Equipment
                    </button>
                    <button
                        type="button"
                        onClick={() => clearForm()}
                        className="px-5 py-2 text-sm font-medium text-gray-800 bg-orange-200 rounded-lg shadow-md border border-orange-400 hover:bg-orange-300"
                    >
                        Clear
                    </button>
                </div>
            </form>
            <EquipmentTableComponent/>
        </>
    );
};