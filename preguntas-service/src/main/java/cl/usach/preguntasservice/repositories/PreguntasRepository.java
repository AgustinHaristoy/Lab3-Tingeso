package cl.usach.preguntasservice.repositories;

import cl.usach.preguntasservice.entities.PreguntasEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PreguntasRepository extends JpaRepository<PreguntasEntity, Long> {
}
