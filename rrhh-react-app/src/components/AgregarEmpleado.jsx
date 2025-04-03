import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AgregarEmpleado() {
  let navegacion = useNavigate();

  const [empleado, setEmpleado] = useState({
    nombre: "",
    departamento: "",
    salario: 0,
  });

  const { nombre, departamento, salario } = empleado;

  const onInputChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const urlBase = "http://localhost:8080/rrhh-app/empleados";
    await axios.post(urlBase, empleado);
    navegacion("/");
  }

  return (
    <div className="container">
      <div>
        <h3 className="text-center m-5">Agregar Empleado</h3>
      </div>
      <form
        className="w-50 mx-auto mt-5 text-center"
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            required={true}
            value={nombre}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="departamento" className="form-label">
            Departamento
          </label>
          <input
            type="text"
            className="form-control"
            id="departamento"
            name="departamento"
            required={true}
            value={departamento}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="salario" className="form-label">
            salario
          </label>
          <input
            type="number"
            className="form-control"
            id="salario"
            name="salario"
            required={true}
            value={salario}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="container">
          <button type="submit" className="btn btn-warning w-25 mt-3">
            Enviar datos
          </button>
          <a href="/" className="btn btn-danger w-25 mt-3 ms-3">
            Volver al Inicio
          </a>
        </div>
      </form>
    </div>
  );
}
