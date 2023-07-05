import React, { useState, useEffect } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import useDepartment from "../../hooks/useDepartment";


const FormPage1 = ({ onNext, onPrevious }) => {

    return (
        <>
            <div className="mb-10">
                <div className="mb-2">
                    <input
                        id="name"
                        type="text"
                        className="mt-2 w-full p-3 bg-gray-50 outline-none focus:outline-blue-300 rounded"
                        placeholder="Ingrese su nombre"
                    />
                </div>
                <div className="mb-2">
                    <input
                        id="lastname"
                        type="text"
                        className="mt-2 w-full p-3 bg-gray-50 outline-none focus:outline-blue-300 rounded"
                        placeholder="Ingrese su apellido"
                    />
                </div>

                <div className="mb-2">
                    <input
                        id="dni"
                        type="text"
                        className="mt-2 w-full p-3 bg-gray-50 outline-none focus:outline-blue-300 rounded"
                        placeholder="Ingrese su DNI"
                    />
                </div>

                <div className="mb-2">
                    <input
                        id="email"
                        type="text"
                        className="mt-2 w-full p-3 bg-gray-50 outline-none focus:outline-blue-300 rounded"
                        placeholder="Ingrese su correo electronico"
                    />
                </div>

                <div className="mb-2">
                    <input
                        id="phone"
                        type="text"
                        className="mt-2 w-full p-3 bg-gray-50 outline-none focus:outline-blue-300 rounded"
                        placeholder="Ingrese su número de celular"
                    />
                </div>
            </div>
            <div className="flex gap-2">
                <button
                    className="w-3/6 bg-cyan-400 rounded px-4 py-1 font-semibold hover:bg-cyan-200 text-2xl"
                    onClick={() => onPrevious()}
                >
                    <AiOutlineArrowLeft
                        className="w-full" />
                </button>
                <button
                    className="w-3/6 bg-green-400 rounded px-4 py-1 font-semibold hover:bg-green-200"
                    onClick={() => onNext()}
                >
                    <AiOutlineArrowRight
                        className="w-full text-2xl" />
                </button>
            </div>

        </>
    );
};

const FormPage2 = ({ onPrevious, onSubmit }) => {

    const { departmentData } = useDepartment()
    const [selectedDepartment, setSelectedDepartment] = useState("null");

    const loadLocation = (event) => {
        setSelectedDepartment(event.target.value);
    }

    useEffect(() => {
        console.log(selectedDepartment);
    }, [selectedDepartment]);

    return (
        <>
            <div className="mb-10">

                <div className="mb-2">
                    <select
                        id="department"
                        type="text"
                        className="text-center mt-2 w-full p-3 bg-gray-50 outline-none focus:outline-blue-300 rounded"
                        onChange={loadLocation}
                        value={selectedDepartment}
                    >
                        <option>-- Seleccione su departamento -- </option>
                        {departmentData.map(department => (
                            <option key={department.id} value={department.id}>{department.nombre}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-2">
                    <input
                        id="location"
                        type="text"
                        className="mt-2 w-full p-3 bg-gray-50 outline-none focus:outline-blue-300 rounded"
                        placeholder="Ingrese su distrito"
                    />
                </div>

                <div className="mb-2">
                    <input
                        id="address"
                        type="text"
                        className="mt-2 w-full p-3 bg-gray-50 outline-none focus:outline-blue-300 rounded"
                        placeholder="Ingrese su dirección"
                    />
                </div>

                <div className="mb-2">
                    <input
                        id="password"
                        type="text"
                        className="mt-2 w-full p-3 bg-gray-50 outline-none focus:outline-blue-300 rounded"
                        placeholder="Ingrese contraseña"
                    />
                </div>

                <div className="mb-2">
                    <input
                        id="repassword"
                        type="text"
                        className="mt-2 w-full p-3 bg-gray-50 outline-none focus:outline-blue-300 rounded"
                        placeholder="Confirmar contraseña"
                    />
                </div>
            </div>

            <div className="flex gap-2">
                <button
                    className="w-3/6 bg-cyan-400 rounded px-4 py-1 font-semibold hover:bg-cyan-200 text-2xl"
                    onClick={() => onPrevious()}
                > <AiOutlineArrowLeft className="w-full" /> </button>

                <button
                    className="w-3/6 bg-green-400 rounded px-4 py-1 font-semibold hover:bg-green-200"
                    onClick={() => onSubmit()}
                >Registrarse </button>
            </div>

        </>
    );
};

const RegisterForPatients = ({ currentPage, setCurrentPage }) => {

    const handleNextPage = (data) => {
        setCurrentPage(currentPage + 1);
    }

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleSubmitForm = (data) => {
        console.log(data);
    };

    return (
        <div>
            {currentPage === 1 && <FormPage1 onNext={handleNextPage} onPrevious={handlePreviousPage} />}
            {currentPage === 2 && (
                <FormPage2 onPrevious={handlePreviousPage} onSubmit={handleSubmitForm} />
            )}
        </div>
    );
}

export default RegisterForPatients


