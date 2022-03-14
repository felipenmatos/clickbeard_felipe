import React from "react";
import styled from "styled-components";

const Alert = () => {
    return (
        <ContainerAlert>
            <TextAlert>Atendimento das 08:00 às 18:00 de Seg. à Sex.</TextAlert>
        </ContainerAlert>
    )
};

const ContainerAlert = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 40px;
    margin-top: 20px;
    font-family: 'Ubuntu', sans-serif;
    background: #000;
    box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 26px 30px;

    transition: all 0.5s;

    :hover {
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
    filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
`;

const TextAlert = styled.div`
    color: #FFF;
    font-family: 'Ubuntu', sans-serif;
    font-size: 13px;
`;

export default Alert;