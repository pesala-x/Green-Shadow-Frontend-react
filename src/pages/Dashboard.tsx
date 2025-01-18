import {SideBar} from "../components/dashboard/SideBar.tsx";

export const Dashboard = () => {
    return (
        <>
            <SideBar />
            {/*content*/}
            <div className="ml-60 text-center">
                <h1>Dashboard</h1>
            </div>
        </>
    );
};