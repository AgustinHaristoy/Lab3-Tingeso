import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import Navbar from "./NavbarComponent";


export default function HomeComponent() {

    const ComenzarFacil = () => {
        localStorage.setItem("puntaje", 0);
        localStorage.setItem("restantes", 4);
        window.location.href = "/prueba-facil";
    };

    const ComenzarMedio = () => {
        localStorage.setItem("puntaje", 0);
        localStorage.setItem("restantes", 4);
        window.location.href = "/prueba-medio";
    };

    const ComenzarDificil = () => {
        localStorage.setItem("puntaje", 0);
        localStorage.setItem("restantes", 4);
        window.location.href = "/prueba-dificil";
    };

    const Ingresar = () => {
        window.location.href = "/ingresar";
    };

    return (
        <div>
            <GlobalStyle />
            <HomeStyle>
                <Navbar />
                <h1 className="text-center">
                    <b>
                        {" "}
                        <i>
                            {" "}
                            <b>¡Bienvenido/a a Prython!</b>
                        </i>
                    </b>
                </h1>
                <h3 className="text-center">
                    {" "}
                    <b>
                        Selecciona tu nivel de dificultad y comienza a resolver los
                        desafíos.{" "}
                    </b>
                </h3>
                <br></br>

                <div className="facil">
                    <h2>
                        <b>Nivel Fácil 🙂</b>
                    </h2>
                    <h3>
                        Para principiantes en Python que quieren sumergirse en el mundo de
                        la programación y aprender con desafíos básicos y rápidos.
                    </h3>
                    <button type="button" class="btn btn-primary" onClick={ComenzarFacil}>
                        <b>Comenzar</b>
                    </button>
                </div>
                <br></br>
                <div className="medio">
                    <h2>
                        <b>Nivel Medio 🤔</b>
                    </h2>
                    <h3>
                        Para aquellos que ya tienen conocimientos en Python y quieren poner
                        a prueba sus habilidades con desafíos de dificultad media.
                    </h3>
                    <button type="button" class="btn btn-primary" onClick={ComenzarMedio}>
                        <b>Comenzar</b>
                    </button>
                </div>
                <br></br>
                <div className="dificil">
                    <h2>
                        <b>Nivel Difícil 😈</b>
                    </h2>
                    <h3>
                        Para aquellos expertos en Python que buscan los mayores desafíos.
                    </h3>
                    <button type="button" className="btn btn-primary" onClick={ComenzarDificil}>
                        <b>Comenzar</b>
                    </button>
                </div>

                <br></br>
                <div className="nueva-pregunta">
                    <h2>
                        <b>Agregar un nuevo desafio 🐍 </b>
                    </h2>
                    <h3>
                        ¿Has creado un desafío y quieres ver como otros se enfrentan a él?
                        Accede a esta opción para agregar un nuevo desafío.
                    </h3>
                    <button type="button" class="btn btn-primary" onClick={Ingresar}>
                        <b>Acceder</b>
                    </button>
                </div>
                <br></br>
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
.text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #fff;
}

.facil{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #4B8BBE;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FFE873;
    cursor: pointer;
    transition all 300ms linear;
}

.facil:hover{
    color: #41FF3B;
}

.facil button{
    background-color: #306998;
    border-radius: 5px;
    color: #FDFEFE;
    width: 200px;
    height: 50px;
    cursor: pointer;
    transition all 300ms linear;
}

.facil button:hover{
    background-color: #41FF3B;
    font-size: 20px;
    border: 2px solid #FFE873;
}

.dificil{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #4B8BBE;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FFE873;
    cursor: pointer;
    transition all 300ms linear;
}

.dificil:hover{
    color: #FF3B3B;
}

.dificil button{
    background-color: #306998;
    border-radius: 5px;
    color: #FDFEFE;
    width: 200px;
    height: 50px;
    cursor: pointer;
    transition all 300ms linear;
}

.dificil button:hover{
    background-color: #FF3B3B;
    font-size: 20px;
    border: 2px solid #FFE873;
}

.medio{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #4B8BBE;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FFE873;
    cursor: pointer;
    transition all 300ms linear;
}

.medio:hover{
    color: #FFD43B;
}

.medio button{
    background-color: #306998;
    border-radius: 5px;
    color: #FDFEFE;
    width: 200px;
    height: 50px;
    cursor: pointer;
    transition all 300ms linear;
}

.medio button:hover{
    background-color: #FFD43B;
    font-size: 20px;
    border: 2px solid #FFE873;
}

.nueva-pregunta{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #4B8BBE;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FFE873;
    cursor: pointer;
    transition all 300ms linear;
}

.nueva-pregunta:hover{
    color: #913BFF;
}

.nueva-pregunta button{
    background-color: #306998;
    border-radius: 5px;
    color: #FDFEFE;
    width: 200px;
    height: 50px;
    cursor: pointer;
    transition all 300ms linear;
}

.nueva-pregunta button:hover{
    background-color: #913BFF;
    font-size: 20px;
    border: 2px solid #FFE873;
}
`;