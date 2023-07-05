import { AiOutlineUser } from 'react-icons/ai'
import { BiClinic } from 'react-icons/bi'

import { DepartmentsProvider } from '../../context/DepartmentsProvider';
import RegisterForPatients from './RegisterForPatients';
import RegisterForClinics from './RegisterForClinics';

import { useState } from 'react'


const PatientOrClinic = () => {
    const [selectedForm, setSelectedForm] = useState(null);
    const [showButtons, setShowButtons] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);

    const Buttons = () => {
        const handleClick = (form) => {
            setCurrentPage(1);
            setSelectedForm(form);
            setShowButtons(false);
        }
        return (
            <>
                <p className='text-center mb-4 text-2xl font-thin'>Seleccione su tipo de usuario</p>
                <div className="flex justify-center gap-4">
                    <div
                        className="flex flex-col items-center w-52 h-52 bg-green-300 rounded-lg shadow-2xl hover:bg-green-100
                    hover:scale-110 duration-300 cursor-pointer
                    "
                        onClick={() => handleClick('RegisterForPatients')}
                    >
                        <p className="text-center font-semibold pt-2 uppercase">Paciente</p>
                        <AiOutlineUser className="w-full h-full p-4" />
                    </div>
                    <div
                        className="flex flex-col items-center w-52 h-52 bg-blue-300 rounded-lg shadow-2xl hover:bg-blue-100
                        hover:scale-110 duration-300 cursor-pointer
                        "
                        onClick={() => handleClick('RegisterForClinics')}
                    >
                        <p className="text-center font-semibold pt-2 uppercase">Clinica</p>
                        <BiClinic className="w-full h-full p-4" />
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <DepartmentsProvider>
                {(showButtons === true || currentPage === 0) && <Buttons />}
                {selectedForm === 'RegisterForPatients' && <RegisterForPatients
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}>
                </RegisterForPatients>}
                {selectedForm === 'RegisterForClinics' && <RegisterForClinics
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                ></RegisterForClinics>}
            </DepartmentsProvider>
        </>
    );
};

export default PatientOrClinic;