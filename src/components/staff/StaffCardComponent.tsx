import {useSelector} from "react-redux";

export const StaffCardComponent = () => {
    const staffList = useSelector((state) => state.staff);

    return (
        <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {staffList.map((staff) => (
                <div
                    key={staff.staff_id}
                    className="max-w-md p-6 border rounded-lg shadow-md hover:shadow-xl transition-shadow bg-gradient-to-br from-gray-200 to-white"
                >
                    <h2 className="text-xl font-semibold text-blue-800 mb-2">
                        {staff.first_name} {staff.last_name}
                    </h2>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-800">
                        <p><strong>ID:</strong> {staff.staff_id}</p>
                        <p><strong>Designation:</strong> {staff.Designation}</p>
                        <p><strong>Gender:</strong> {staff.Gender}</p>
                        <p><strong>Joined:</strong> {staff.joined_date}</p>
                        <p><strong>DOB:</strong> {staff.data_of_birth}</p>
                        <p><strong>Mobile:</strong> {staff.mobile}</p>
                        <p className="col-span-2">
                            <strong>Address:</strong> {`${staff.address_line1}, ${staff.address_line2}, ${staff.address_line3}, ${staff.address_line4}, ${staff.address_line5}`}
                        </p>
                        <p className="col-span-2"><strong>Vehicle:</strong> {staff.vehicle}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
