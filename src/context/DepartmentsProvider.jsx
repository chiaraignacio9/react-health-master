import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const DepartmentsContext = createContext();

const DepartmentsProvider = ({ children }) => {

    //      valor           funcion que modifica el state
    const [departmentData, setDepartmentData] = useState([]);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await axios('https://apis.datos.gob.ar/georef/api/departamentos?provincia=50&campos=id,nombre&max=5000')
                setDepartmentData(response.data.departamentos)
            } catch (e) {
                console.log(e);
            };
        }
        fetchDepartments();
    }, [])


    return (
        <DepartmentsContext.Provider
            value={{
                departmentData
            }}
        >{children}</DepartmentsContext.Provider>
    );
}


export {
    DepartmentsProvider
}

export default DepartmentsContext