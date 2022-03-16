import React from "react";
import styled from "styled-components";

const Warning = () => {
    return (
        <ContainerAlert>
            <TextAlert>
                Atenção: Cada serviço tem tempo médio de 30 minutos, 
                então confira os horários disponíveis antes de Agendar.
            </TextAlert>
        </ContainerAlert>
    )
};

const ContainerAlert = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 60px;
    margin-top: 310px;
    margin-left: -50px;
    font-family: 'Ubuntu', sans-serif;
    position: fixed;
    background: #FAFAFA;
    box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 26px 30px;

    transition: all 0.5s;

    :hover {
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
    filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
    }
`;

const TextAlert = styled.div`
    color: #000;
    font-family: 'Ubuntu', sans-serif;
    font-size: 13px;
`;

export default Warning;