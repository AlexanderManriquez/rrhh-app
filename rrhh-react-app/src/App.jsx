import React from 'react';
import ListadoEmpleados from './components/ListadoEmpleados';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <div>
        {/* <header className="container">
          <h1 className='text-center'>Sistema de Gestión de Recursos Humanos</h1>
        </header> */}
        <Navbar />
        <ListadoEmpleados />
      </div>
    </>
  )
}

export default App
