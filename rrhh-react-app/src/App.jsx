import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ListadoEmpleados from './components/ListadoEmpleados';
import Navbar from './components/Navbar';
import AgregarEmpleado from './components/AgregarEmpleado';


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ListadoEmpleados />} />
          <Route exact path="/agregar-empleado" element={<AgregarEmpleado />} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
