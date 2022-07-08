import {Outlet} from "react-router-dom";

import UsersComponent from "../components/UsersComponent";

export default function UsersPage() {
    return (
        <div>
            <UsersComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
}