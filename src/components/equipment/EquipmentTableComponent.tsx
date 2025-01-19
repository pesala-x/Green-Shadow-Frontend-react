import {useDispatch, useSelector} from "react-redux";
import {Equipment} from "../../models/equipment";
import {deleteEquipment} from "../../reducers/EquipmentSlice";
import {FaTrashAlt} from "react-icons/fa";

export const EquipmentTableComponent = () => {
    const dispatch = useDispatch();
    const equipments = useSelector((state: any) => state.equipment);

    const handleDelete = (equipmentId: string) => {
        if (window.confirm(`Are you sure you want to delete equipment with ID: ${equipmentId}?`)) {
            dispatch(deleteEquipment(equipmentId));
        }
    };

    return (
        <div className="overflow-x-auto mx-2 mt-7 bg-gray-50 p-4 rounded-lg shadow-lg">
            <table className="w-full border-collapse bg-white text-sm text-gray-800 shadow-md sm:rounded-lg">
                <thead>
                <tr className="bg-light-blue-200 text-gray-700 text-base font-semibold uppercase tracking-wide border-b border-dashed">
                    <th className="px-6 py-4 text-left">Equipment ID</th>
                    <th className="px-6 py-4 text-left">Equipment Name</th>
                    <th className="px-6 py-4 text-left">Type</th>
                    <th className="px-6 py-4 text-left">Status</th>
                    <th className="px-6 py-4 text-left">Field</th>
                    <th className="px-6 py-4 text-left">Staff</th>
                    <th className="px-6 py-4 text-left">Remove</th>
                </tr>
                </thead>
                <tbody>
                {equipments.length > 0 ? (
                    equipments.map((equipment: Equipment, index: number) => (
                        <tr
                            key={index}
                            className="even:bg-gray-50 odd:bg-white hover:bg-light-blue-50 transition duration-200 border-b border-dashed"
                        >
                            <td className="px-6 py-4 text-sm">{equipment.equipment_id}</td>
                            <td className="px-6 py-4 text-sm">{equipment.equipment_name}</td>
                            <td className="px-6 py-4 text-sm">{equipment.equipment_type}</td>
                            <td className="px-6 py-4 text-sm">{equipment.status}</td>
                            <td className="px-6 py-4 text-sm">{equipment.field || "N/A"}</td>
                            <td className="px-6 py-4 text-sm">{equipment.staff || "N/A"}</td>
                            <td className="px-6 py-4 text-sm">
                                <button
                                    onClick={() => handleDelete(equipment.equipment_id)}
                                    className="flex items-center justify-center min-w-[100px] text-white bg-red-500 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2 transition-colors duration-300"
                                >
                                    <FaTrashAlt className="mr-2"/> Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr className="border-b border-dashed">
                        <td colSpan={7} className="text-center py-6 text-gray-500 text-base">
                            No equipment available.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};
