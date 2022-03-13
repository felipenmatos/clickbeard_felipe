import React from "react";
import styled from "styled-components";
import Agendamento from "../Componentes/Agendamento/Agendamento";
import List from "../Componentes/List";
import NavbarHome from "../Componentes/NavbarHome";

function HomeClientes(user, setUser) {
    
    return (
        <Container>
            <NavbarHome />
            <Main>
                <List 
                user={user}
                setUser={setUser}
                />
                <ContainerAgendar>
                    <Agendamento 
                        
                    />
                </ContainerAgendar>
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

const ContainerAgendar = styled.div``;

export default HomeClientes;