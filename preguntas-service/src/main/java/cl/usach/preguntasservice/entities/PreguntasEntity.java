package cl.usach.preguntasservice.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "preguntas")
@Data
public class PreguntasEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String codigo;
    private String pregunta;
    private String respuesta;
    private String dificultad;
}
