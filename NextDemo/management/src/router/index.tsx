import { Navigate } from "react-router-dom";
import Comp1 from "@/components/Comp1";
import Comp2 from "@/components/Comp2";

const routes = [{
    path: '/',
    element: <Navigate to={<Comp1 />}></Navigate>
}, {
    path: '/comp1',
    element: <Comp1 />
}]

export default routes