import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { CodeBlock, rainbow} from "react-code-blocks";
import Form from "react-bootstrap/Form";
import add_to_puntaje from "./Puntaje";

export default function PreguntasComponent({ id, pregunta, code, resp }) {
    const initialState = {
        answer: "",
    };

    const [puntaje, setPuntaje] = useState(
        localStorage.getItem("puntaje") ? localStorage.getItem("puntaje") : 0
    );

    const [trueAnswer, setTrueAnswer] = useState(-1);

    const [input, setInput] = useState(initialState);

    const changeAnswerHandler = (event) => {
        setInput({ ...input, answer: event.target.value });
    };

    const compararRespuestas = (e) => {
        e.preventDefault();
        if (input.answer === resp) {
            setPuntaje(add_to_puntaje(7));
            setTrueAnswer(1);
        } else {
            setPuntaje(add_to_puntaje(1));
            setTrueAnswer(0);
        }

        if (localStorage.getItem("restantes") === 0) {
            window.location.href = "/resultados";
        }
    };

    const formatCode = (code) => {
        // Reemplazar \n por salto de línea y \t por tabulación
        return code.replace(/\\n/g, "\n").replace(/\\t/g, "\t");
    };

    return (
        <div>
            <GlobalStyle />
            <HomeStyle>
                <h3 className="text-pregunta">
                    <b>
                        Pregunta {id}: {pregunta}
                    </b>
                </h3>
                <div className="code-box">
                    <CodeBlock
                        text={formatCode(code)}
                        language="python"
                        theme={rainbow}
                        codeBlock={{ lineNumbers: true }}
                        align="left"
                    />
                </div>
                <div class="respuesta">
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="respuesta"
                            value={input.answer}
                            onChange={changeAnswerHandler}
                        >
                            <Form.Label>
                                <h3>Ingresa tu respuesta aquí: </h3>
                            </Form.Label>
                            <br></br>
                            <Form.Control className="text" type="respuesta" placeholder="Ingresa tu respuesta" />
                        </Form.Group>
                    </Form>
                    {trueAnswer === 1 ? (
                        <h3>¡Respuesta Correcta. Obtienes 7 puntos!</h3>
                    ) : trueAnswer === 0 ? (
                        <h3>Respuesta Incorrecta. Obtienes 1 punto.</h3>
                    ) : (
                        <button varian="primary" onClick={compararRespuestas}>
                            Verificar Respuesta
                        </button>
                    )}
                </div>
                <hr></hr>
            </HomeStyle>
        </div>
    );
}

const GlobalStyle = createGlobalStyle`
body { 
    background-color: #306998;
}
`;

const HomeStyle = styled.nav`
.text-enunciado {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.code-box {
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-bottom: 20px;
}
.respuesta {
    justify-content: center;
    padding-bottom: 50px;
}

.text{
   width: 250px;
   height: 20px;
   border-radius: 5px;
   border: 3px solid #FFD43B;
   color: #306998;

}

button {
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    margin-top: 40px;
    background: #7dcea0;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}
button:hover {
    background-color: #e2f1f8;
    color: #FFD43B;
    transform: scale(1.1);
}
`;