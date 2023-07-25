import axios from "axios";

class IngresarPreguntaService {
    
    ingresarPregunta(pregunta){
        return axios.post(`http://localhost:8080/preguntas`, pregunta);
    }
}

export default new IngresarPreguntaService();