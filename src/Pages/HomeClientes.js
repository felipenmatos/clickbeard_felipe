import React from "react";
import styled from "styled-components";
import NavbarHome from "../Componentes/NavbarHome";

const HomeClientes = () => {
    
    
    
    return (
        <Container>
            <NavbarHome />
            <Main>

            </Main>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: #000;
`;

const Main = styled.div`
    display: flex;
    gap: 30px;
    background-color: #FFFFFF;
    border-radius: 60px 60px 0px 0px;
    height: 100vh;
    margin-top: 80px;
    padding: 50px 90px;
`;

export default HomeClientes;