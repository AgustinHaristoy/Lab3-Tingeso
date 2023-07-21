package cl.usach.preguntasservice.controllers;

import cl.usach.preguntasservice.entities.PreguntasEntity;
import cl.usach.preguntasservice.services.PreguntasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/preguntas")
public class PreguntasController {
    @Autowired
    PreguntasService preguntasService;
    @GetMapping
    public ResponseEntity<List<PreguntasEntity>> getAllPreguntas() {
        List<PreguntasEntity> preguntas = preguntasService.getAllPreguntas();
        if(preguntas.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(preguntas);
    }
}
