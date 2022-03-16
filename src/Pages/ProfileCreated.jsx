import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Background1 from "../assets/background.jpg";
import NavbarClientes from "../Componentes/NavbarClientes";
import iconValidate from "../assets/icons/IconValidate.svg";


const PerfilCreated = () => {
    
    const navigate = useNavigate();
    

    function handleLogin() {
        navigate("/LoginClientes")
    }
    
    return (
        <Container style={{backgroundImage: `url(${Background1})`}}>
            <NavbarClientes />
            <DivLogin>
                <ContainerProfileCreated>
                    <IconValidate src={iconValidate}  alt="Icon Validate"/>
                    <Text>Perfil Criado</Text>
                    <ButtonNextLogin onClick={() => handleLogin()}>Login</ButtonNextLogin>
                </ContainerProfileCreated>
            </DivLogin>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    margin-top: -22px;
    padding: 0;
    margin: 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
`;

const DivLogin = styled.div`
    width: 60%;
    height: 80%;
    margin-top: 60px;
    margin-left: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContainerProfileCreated = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 380px;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 16px;
    transition: all 0.5s;

    :hover {
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
    filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
    }
`;

const Text = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    color: #fff;
`;

const IconValidate = styled.img`

`;

const ButtonNextLogin = styled.button`
    width: 180px;
    height: 30px;
    margin-top: 40px;
    font-size: 15px;
    border-radius: 10px;
    border: 0px;
    cursor: pointer;
`;

export default PerfilCreated;