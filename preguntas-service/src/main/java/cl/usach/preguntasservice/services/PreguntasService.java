package cl.usach.preguntasservice.services;

import cl.usach.preguntasservice.entities.PreguntasEntity;
import cl.usach.preguntasservice.repositories.PreguntasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PreguntasService {
    @Autowired
    PreguntasRepository preguntasRepository;
    public List<PreguntasEntity> getAllPreguntas() {
        return preguntasRepository.findAll();
    }

    public boolean idAlreadyExists(Long id) {
        return preguntasRepository.existsById(id);
    }

    public List<PreguntasEntity> getPreguntasByDificultad(String dificultad) {
        return preguntasRepository.findByDificultad(dificultad);
    }

    public PreguntasEntity guardarPregunta(PreguntasEntity pregunta) {
        return preguntasRepository.save(pregunta);
    }
}
