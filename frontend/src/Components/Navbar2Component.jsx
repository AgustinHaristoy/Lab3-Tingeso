import React from "react";
import styled from "styled-components";
import Cronometro from "./Cronometro";


function Navbar2Component() {
  return (
    <>
      <NavStyle>
        <nav className="sticky"></nav>
        <header class="header">
          <div class="logo">
            <img src="https://i.ibb.co/gjXzBHs/photo-output-2.png" alt="Prython Logo" width="200px" />
          </div>
          <nav></nav>
          <div class="clock">
            <Cronometro />
            <h1></h1>
          </div>
          <a class="btn" href="/">
            <button>Volver al menú principal</button>
          </a>
        </header>
      </NavStyle>
    </>
  );
}

export default Navbar2Component;


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
`