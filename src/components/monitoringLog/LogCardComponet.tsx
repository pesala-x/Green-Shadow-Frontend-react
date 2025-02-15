import React from "react";
import {useDispatch} from "react-redux";
import {deleteLog} from "../../reducers/LogSlice";
import {Monitoring_log} from "../../models/monitoring_log";

interface LogCardComponentProps {
    log: Monitoring_log;
}

export const LogCardComponent: React.FC<LogCardComponentProps> = ({log}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete log ${log.log_code}?`)) {
            dispatch(deleteLog(log.log_code));
        }
    };

    return (
        <div
            className="max-w-sm mx-auto mb-6 p-6 bg-gradient-to-br from-gray-100 to-white shadow-xl rounded-2xl transform transition-transform hover:scale-105">
            <div className="relative">
                <img
                    src={log.log_image}
                    alt={log.log_code}
                    className="w-full h-40 object-cover rounded-t-2xl border border-gray-200"
                />
                <button
                    onClick={handleDelete}
                    className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-700 font-medium rounded-full text-sm px-3 py-2 flex items-center space-x-2 shadow-md"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 6.5L4.5 6.5M8.25 6.5L8.25 4.75C8.25 4.05964 8.80964 3.5 9.5 3.5L14.5 3.5C15.1904 3.5 15.75 4.05964 15.75 4.75L15.75 6.5M12 11.75L12 17.25M9 11.75L9 17.25M15 11.75L15 17.25M5.25 6.5L18.75 6.5C19.4404 6.5 20 7.05964 20 7.75L20 8.25C20 8.94036 19.4404 9.5 18.75 9.5H5.25C4.55964 9.5 4 8.94036 4 8.25L4 7.75C4 7.05964 4.55964 6.5 5.25 6.5Z"
                        />
                    </svg>
                </button>
            </div>
            <div className="mt-4 text-center">
                <h2 className="text-lg font-bold text-gray-800">{log.log_code}</h2>
                <p className="text-sm text-gray-600 mb-2">Date: {log.log_date}</p>
                <div className="space-y-1 text-left">
                    <p className="text-gray-700 text-sm"><strong>Observation:</strong> {log.observation}</p>
                    <p className="text-gray-700 text-sm"><strong>Field:</strong> {log.field}</p>
                    <p className="text-gray-700 text-sm"><strong>Crop:</strong> {log.crop}</p>
                    <p className="text-gray-700 text-sm"><strong>Staff:</strong> {log.staff}</p>
                </div>
            </div>
        </div>
    );
};
