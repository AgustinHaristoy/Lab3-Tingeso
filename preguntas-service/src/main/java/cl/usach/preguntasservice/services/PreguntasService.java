package cl.usach.preguntasservice.services;

import cl.usach.preguntasservice.entities.PreguntasEntity;
import cl.usach.preguntasservice.repositories.PreguntasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

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

    public List<PreguntasEntity> getPreguntasAleatorias(String dificultad){
        List<PreguntasEntity> preguntas = getPreguntasByDificultad(dificultad);
        if(preguntas.size() <= 4){
            return preguntas;
        }

        List<PreguntasEntity> preguntasAleatorias = new ArrayList<>();
        Random random = new Random();

        List<Integer> indices = new ArrayList<>();
        while(indices.size() < 4){
            int indice = random.nextInt(preguntas.size());
            if(!indices.contains(indice)){
                indices.add(indice);
                preguntasAleatorias.add(preguntas.get(indice));
            }
        }
        return preguntasAleatorias;
    }
}
