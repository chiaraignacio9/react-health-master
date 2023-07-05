import React from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import useDepartment from "../../hooks/useDepartment";
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import OutlinedInput from '@mui/material/OutlinedInput'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const FormPage1 = ({ onNext, onPrevious }) => {
  return (
    <>
      <div className="mb-10">
        <div className="mb-2">
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="mt-2 w-full p-3 "
            label="Ingrese el nombre de la clinica"
          />
        </div>
        <div className="mb-2">
          <TextField
            id="outlined-basic"
            label="Ingrese el CUIT (sin guiones)"
            variant="outlined"
            className="w-full mt-2 p-3"
          />
        </div>
        <div className="mb-2">
          <TextField
            id="outlined-basic"
            label="Ingrese el celular de contacto"
            variant="outlined"
            className="w-full mt-2 p-3"
          />
        </div>

        <div className="mb-2">
          <TextField
            id="outlined-basic"
            label="Ingrese el correo electronico"
            variant="outlined"
            className="w-full mt-2 p-3"
          />
        </div>

        <div className="mb-2">
          <TextField
            id="outlined-basic"
            label="Nombre de usuario"
            variant="outlined"
            className="w-full mt-2 p-3"
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

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="mb-10">
        <div className="mb-2">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={departmentData.map((department) => department.nombre)}
            renderInput={(params) => <TextField {...params} label="Departamento" />}
          />
        </div>

        <div className="mb-2">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={departmentData.map((department) => department.nombre)}
            renderInput={(params) => <TextField {...params} label="Localidad" />}
          />
        </div>

        <div className="mb-2">
          <TextField
            id="outlined-basic"
            label="Dirección"
            variant="outlined"
            className="w-full mt-2 p-3"
          />
        </div>

        <div className="mb-2">
          <FormControl variant="outlined" className="w-full">
            <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
            <OutlinedInput
              className="w-full"
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Contraseña"
            />
          </FormControl>
        </div>
        <div className="mb-2">
          <FormControl variant="outlined" className="w-full">
            <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
            <OutlinedInput
              className="w-full"
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Contraseña"
            />
          </FormControl>
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

const RegisterForClinics = ({ currentPage, setCurrentPage }) => {

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

export default RegisterForClinics


