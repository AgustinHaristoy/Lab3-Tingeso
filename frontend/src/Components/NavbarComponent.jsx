import React from "react";
import styled from "styled-components";

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

function NavbarComponent() {
    return (
        <>
            <NavStyle>
                <nav className="sticky"></nav>
                <header class="header">
                    <div class="logo">
                        <img src="https://i.ibb.co/gjXzBHs/photo-output-2.png" alt="Prython Logo" width="200px" />
                    </div>
                    <nav className="navbar">
                        <ul>
                            <li><a href="/">Inicio</a></li>
                            <li><a onClick={ComenzarFacil}>Nivel Fácil</a></li>
                            <li><a onClick={ComenzarMedio}>Nivel Medio</a></li>
                            <li><a onClick={ComenzarDificil}>Nivel Difícil</a></li>
                            <li><a href="/ingresar">Agregar Pregunta</a></li>
                        </ul>
                    </nav>
                </header>
            </NavStyle>
        </>
    );
}

export default NavbarComponent;


const NavStyle = styled.nav`

.header{
    background-color: #646464;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 85px;
    padding: 5px 10%;
    border-bottom: 1px solid #FFE873;
}

.header .logo{
    margin-right: auto;
    padding: 5px;
    border-radius: 5px;
    background-color: #273476;
}

.header .btn button{
    margin-left: 20px;
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #eceff1;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}

.header .btn button:hover{
    background-color: #e2f1f8;
    color: #ffbc0e;
    transform: scale(1.1);
}

.header .clock{
    margin-top: 20px;
    margin-left: 80px;
    font-weight: 700;
    text-align: center;
    color: #eceff1;
}

.header .puntaje{
    margin-left: 80px;
    font-weight: 700;
    text-align: center;
    color: #eceff1;
}

.navbar{
	float: right;
	height: 105px;
    margin-left: 10px;
}
.navbar > ul > li{
	font-size: 24px;
	display: inline-block;
    margin: 0px 0px 0px 10px;
	line-height: 70px;
	border-right: 1px solid #FFD43B;
	padding-right: 10px;
}
.navbar > ul > li a{
	display: block;
	text-decoration: none;
	padding: 1px;
	color: #FFE873;
    cursor: pointer;
	text-shadow: 2px 2px 1px #4B8BBE;
	transition: all 200ms;
}

.navbar > ul > li a:hover {
	padding-left: 10px;
	padding-right: 10px;
	border-radius: 5px;
	color: #4B8BBE;
	background-color: #273476;
	text-shadow: -1px 2px 2px #FFE873;
	border: 1px solid #FFD43B;
}
`