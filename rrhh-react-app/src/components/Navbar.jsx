import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          RR.HH.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/agregar-empleado">
                Agregar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
