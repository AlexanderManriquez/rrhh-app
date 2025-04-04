import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListadoEmpleados() {
  const urlBase = "http://localhost:8080/rrhh-app/empleados";
  const [empleados, setEmpleados] = useState([]);
  useEffect(() => {
    cargarEmpleados();
  }, []);

  const cargarEmpleados = async () => {
    const resultado = await axios.get(urlBase);
    setEmpleados(resultado.data);
  };

  const eliminarEmpleado = async (id) => {
    await axios.delete(`${urlBase}/${id}`);
    cargarEmpleados();
  };

  return (
    <main className="container mt-5">
      <h3 className="text-center">Listado de Empleados</h3>
      <table className="table w-75 mx-auto mt-5 table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Departamento</th>
            <th scope="col">Sueldo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado, indice) => (
            <tr key={indice}>
              <th scope="row">{empleado.idEmpleado}</th>
              <td>{empleado.nombre}</td>
              <td>{empleado.departamento}</td>
              <td>${empleado.salario}</td>
              <td className="text-center">
                <Link
                  to={`/editar-empleado/${empleado.idEmpleado}`}
                  className="btn btn-warning btn-sm mx-1"
                >
                  Editar
                </Link>
                <button
                  onClick={() => eliminarEmpleado(empleado.idEmpleado)}
                  className="btn btn-danger btn-sm mx-1"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
