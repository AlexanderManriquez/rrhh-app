import React , { useEffect, useState } from "react";
import axios from "axios";

export default function ListadoEmpleados() {

    const urlBase = "http://localhost:8080/rrhh-app/empleados";
    const [empleados, setEmpleados] = useState([]);
    useEffect(() => {
        cargarEmpleados();
    }, []);

    const cargarEmpleados = async () => {
        const resultado = await axios.get(urlBase);
        console.log(resultado.data);
        setEmpleados(resultado.data);
    }

  return (
    <main className="container mt-5">
      <h3 className="text-center">Listado de Empleados</h3>
        <table className="table w-75 mx-auto mt-5 table-striped table-hover align-middle" >
          <thead className="table-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Departamento</th>
              <th scope="col">Sueldo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
    </main>
  );
}
