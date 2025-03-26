package am.rrhh.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import am.rrhh.modelo.Empleado;

public interface EmpleadoRepositorio extends JpaRepository<Empleado, Integer> {

}
