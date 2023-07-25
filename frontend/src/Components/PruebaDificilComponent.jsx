import React, { Component } from "react";
import Preguntas from "./PreguntasComponent";
import styled from "styled-components";
import Navbar from "./Navbar2Component";

class PruebaFacilComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/preguntas/aleatorias/dificil")
            .then((response) => response.json())
            .then((data) => this.setState({ datas: data }));
    }

    render() {
        return (
            <HomeStyle>
                <Navbar />

                <div className="text-center">
                    <h1 className="asd">
                        <b>
                            <u>Prueba: Nivel Difícil </u>
                        </b>
                    </h1>
                    {this.state.datas.map((data, index) => (
                        <div key={data.id}>
                            <Preguntas
                                id={index + 1}
                                code={data.codigo}
                                pregunta={data.pregunta}
                                resp={data.respuesta}
                            ></Preguntas>
                        </div>
                    ))}
                    <button varian="primary" onClick={cancelForm}>
                            Enviar Prueba
                        </button>
                </div>
            </HomeStyle>
        );
    }
}

export default PruebaFacilComponent;

function cancelForm(){
    window.location.href = '/resultados';
   }

const HomeStyle = styled.nav`
.text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
}
.asd{
    padding-top: 10px;
    padding-bottom: 30px;

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