import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Staff} from "../../models/staff";
import {addStaff, updateStaff, deleteStaff} from "../../reducers/StaffSlice";
import {Vehicle} from "../../models/vehicle";
import {useNavigate} from "react-router";

export const StaffFormComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const staffList = useSelector((state: any) => state.staff);
    const vehicles = useSelector((state: any) => state.vehicle);

    const [staffId, setStaffId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [designation, setDesignation] = useState("");
    const [gender, setGender] = useState("");
    const [joinedDate, setJoinedDate] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [address3, setAddress3] = useState("");
    const [address4, setAddress4] = useState("");
    const [address5, setAddress5] = useState("");
    const [mobile, setMobile] = useState("");
    const [vehicleCode, setVehicleCode] = useState("");
    const [vehicleCategory, setVehicleCategory] = useState("");

    const designations = ["Manager", "Supervisor", "Worker"];
    const genders = ["Male", "Female", "Other"];

    const handleVehicleCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedVehicleCode = e.target.value;
        setVehicleCode(selectedVehicleCode);

        const vehicle = vehicles.find((v: Vehicle) => v.vehicle_code === selectedVehicleCode);
        setVehicleCategory(vehicle ? vehicle.category : "");
    };

    const handleStaffOperation = (type: string) => {
        if (!staffId) {
            alert("Please enter a staff ID.");
            return;
        }

        const staff = staffList.find((s: Staff) => s.staff_id === staffId);
        if (type === "DELETE_STAFF" && !staff) {
            alert("Staff not found.");
            return;
        }

        const newStaff: Staff = {
            staff_id: staffId,
            first_name: firstName,
            last_name: lastName,
            Designation: designation,
            Gender: gender,
            joined_date: joinedDate,
            data_of_birth: dateOfBirth,
            address_line1: address1,
            address_line2: address2,
            address_line3: address3,
            address_line4: address4,
            address_line5: address5,
            mobile,
            vehicle: vehicleCode,
        };

        switch (type) {
            case "ADD_STAFF":
                dispatch(addStaff(newStaff));
                break;
            case "UPDATE_STAFF":
                dispatch(updateStaff(newStaff));
                break;
            case "DELETE_STAFF":
                dispatch(deleteStaff(staffId));
                break;
            default:
                break;
        }
        clearForm();
        navigate("/");
    };

    const handleSearch = () => {
        const staff = staffList.find((s: Staff) => s.staff_id === staffId);
        if (staff) {
            setFirstName(staff.first_name);
            setLastName(staff.last_name);
            setDesignation(staff.Designation);
            setGender(staff.Gender);
            setJoinedDate(staff.joined_date);
            setDateOfBirth(staff.data_of_birth);
            setAddress1(staff.address_line1);
            setAddress2(staff.address_line2);
            setAddress3(staff.address_line3);
            setAddress4(staff.address_line4);
            setAddress5(staff.address_line5);
            setMobile(staff.mobile);
            setVehicleCode(staff.vehicle);

            const vehicle = vehicles.find((v: Vehicle) => v.vehicle_code === staff.vehicle);
            setVehicleCategory(vehicle ? vehicle.vehicle_category : "");
        } else {
            alert("Staff not found.");
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };

    const clearForm = () => {
        setStaffId("");
        setFirstName("");
        setLastName("");
        setDesignation("");
        setGender("");
        setJoinedDate("");
        setDateOfBirth("");
        setAddress1("");
        setAddress2("");
        setAddress3("");
        setAddress4("");
        setAddress5("");
        setMobile("");
        setVehicleCode("");
        setVehicleCategory("");
    };

    return (
        <>
            <form className="mx-2 mt-4 p-4 bg-white shadow rounded-lg">
                <div className="grid gap-6 mb-6 grid-cols-1 sm:grid-cols-2">
                    {/* First 4 Rows */}
                    <div>
                        <label htmlFor="staff_id" className="block mb-2 text-base font-medium text-gray-600">
                            Staff ID
                        </label>
                        <input
                            type="text"
                            id="staff_id"
                            value={staffId}
                            onChange={(e) => setStaffId(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="w-full p-2 border rounded border-gray-300"
                            placeholder="S123"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-base font-medium text-gray-600">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="first_name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            placeholder="John"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2 text-base font-medium text-gray-600">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            placeholder="Doe"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="designation" className="block mb-2 text-base font-medium text-gray-600">
                            Designation
                        </label>
                        <select
                            id="designation"
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            required
                        >
                            <option value="">Select Designation</option>
                            {designations.map((des) => (
                                <option key={des} value={des}>
                                    {des}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="gender" className="block mb-2 text-base font-medium text-gray-600">
                            Gender
                        </label>
                        <select
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            required
                        >
                            <option value="">Select Gender</option>
                            {genders.map((gen) => (
                                <option key={gen} value={gen}>
                                    {gen}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="joined_date" className="block mb-2 text-base font-medium text-gray-600">
                            Joined Date
                        </label>
                        <input
                            type="date"
                            id="joined_date"
                            value={joinedDate}
                            onChange={(e) => setJoinedDate(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="date_of_birth" className="block mb-2 text-base font-medium text-gray-600">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            id="date_of_birth"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="address_line1" className="block mb-2 text-base font-medium text-gray-600">
                            Address Line 1
                        </label>
                        <input
                            type="text"
                            id="address_line1"
                            value={address1}
                            onChange={(e) => setAddress1(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            placeholder="Address 1"
                            required
                        />
                    </div>
                </div>
                <div className="grid gap-6 mb-6 sm:grid-cols-3">
                    <div>
                        <label htmlFor="address_line2" className="block mb-2 text-base font-medium text-gray-600">
                            Address Line 2
                        </label>
                        <input
                            type="text"
                            id="address_line2"
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            placeholder="Address 2"
                        />
                    </div>
                    <div>
                        <label htmlFor="address_line3" className="block mb-2 text-base font-medium text-gray-600">
                            Address Line 3
                        </label>
                        <input
                            type="text"
                            id="address_line3"
                            value={address3}
                            onChange={(e) => setAddress3(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            placeholder="Address 3"
                        />
                    </div>
                    <div>
                        <label htmlFor="address_line4" className="block mb-2 text-base font-medium text-gray-600">
                            Address Line 4
                        </label>
                        <input
                            type="text"
                            id="address_line4"
                            value={address4}
                            onChange={(e) => setAddress4(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            placeholder="Address 4"
                        />
                    </div>
                </div>
                <div className="grid gap-6 mb-6 sm:grid-cols-4">
                    <div>
                        <label htmlFor="address_line5" className="block mb-2 text-base font-medium text-gray-600">
                            Address Line 5
                        </label>
                        <input
                            type="text"
                            id="address_line5"
                            value={address5}
                            onChange={(e) => setAddress5(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            placeholder="Address 5"
                        />
                    </div>
                    <div>
                        <label htmlFor="mobile" className="block mb-2 text-base font-medium text-gray-600">
                            Mobile
                        </label>
                        <input
                            type="text"
                            id="mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300"
                            placeholder="1234567890"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="vehicle_code" className="block mb-2 text-base font-medium text-gray-600">
                            Vehicle Code
                        </label>
                        <select
                            className="w-full p-2 border rounded border-gray-300"
                            value={vehicleCode}
                            onChange={handleVehicleCodeChange}
                            required
                        >
                            <option value="">Select Vehicle Code</option>
                            {vehicles.map((vehicle: Vehicle) => (
                                <option key={vehicle.vehicle_code} value={vehicle.vehicle_code}>
                                    {vehicle.vehicle_code}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="vehicle_category" className="block mb-2 text-base font-medium text-gray-600">
                            Vehicle Category
                        </label>
                        <input
                            type="text"
                            value={vehicleCategory}
                            placeholder="Vehicle Category"
                            readOnly
                            className="w-full p-2 border rounded border-gray-300"
                        />
                    </div>
                </div>
            </form>

            <div className="flex gap-4 justify-start mx-2 mt-4">
                <button
                    type="button"
                    onClick={() => handleStaffOperation("ADD_STAFF")}
                    className="px-5 py-2 text-sm font-medium text-gray-800 bg-yellow-200 rounded-lg shadow-md border border-yellow-400 hover:bg-yellow-300"
                >
                    Add Staff
                </button>
                <button
                    type="button"
                    onClick={() => handleStaffOperation("UPDATE_STAFF")}
                    className="px-5 py-2 text-sm font-medium text-gray-800 bg-green-200 rounded-lg shadow-md border border-green-400 hover:bg-green-300"
                >
                    Update Staff
                </button>
                <button
                    type="button"
                    onClick={() => clearForm()}
                    className="px-5 py-2 text-sm font-medium text-gray-800 bg-orange-200 rounded-lg shadow-md border border-orange-400 hover:bg-orange-300"
                >
                    Clear
                </button>
                <button
                    type="button"
                    onClick={() => handleStaffOperation("DELETE_STAFF")}
                    className="px-5 py-2 text-sm font-medium text-gray-800 bg-red-200 rounded-lg shadow-md border border-red-400 hover:bg-red-300"
                >
                    Delete Staff
                </button>
            </div>
        </>
    );
};
