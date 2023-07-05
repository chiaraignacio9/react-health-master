import { useContext } from "react";
import DepartmentsContext from "../context/DepartmentsProvider";

const useDepartment = () => {
    return useContext(DepartmentsContext)
}
export default useDepartment