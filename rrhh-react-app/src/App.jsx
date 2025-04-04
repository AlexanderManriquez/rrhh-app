import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ListadoEmpleados from './components/ListadoEmpleados';
import Navbar from './components/Navbar';
import AgregarEmpleado from './components/AgregarEmpleado';
import EditarEmpleado from './components/EditarEmpleado';


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ListadoEmpleados />} />
          <Route exact path="/agregar-empleado" element={<AgregarEmpleado />} />
          <Route exact path="/editar-empleado/:id" element={<EditarEmpleado />} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
