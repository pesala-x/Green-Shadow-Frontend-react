import {HeaderComponent} from "../components/sidebar/HeaderComponent.tsx";
import {FieldFormComponent} from "../components/field/FieldFormComponent.tsx";

export function FieldPage() {
    return (
        <>
            <div className="mx-5">
                <HeaderComponent section="Field Management"/>
                <FieldFormComponent/>
            </div>
        </>
    );
}