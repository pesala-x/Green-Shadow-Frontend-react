import {HeaderComponent} from "../components/sidebar/HeaderComponent.tsx";
import {StaffCardComponent} from "../components/staff/StaffCardComponent.tsx";

export const DashboardPage = () => {

    return (
        <>
            <HeaderComponent section="WELCOME TO DASHBOARD"/>
            <StaffCardComponent/>
        </>
    );
};