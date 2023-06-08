import { Outlet } from "react-router-dom";
import Controll from "../Components/Controll";

export default function HomeTamplate() {
    return (
        <div>
            <Controll />
            <Outlet />
        </div>
    );
}
