import React from "react";
import styled from "styled-components";

//import close from '../../assets/close.svg';

function ModalAgendamento  (){
    return (
        <Backdrop className='backdrop'>
            <ModalContent className='modal-content'>
                <ImgClose className='iconClose'  alt="close incon" />
                <Label>Nome do Barbeiro</Label>
                <InputBarbeiro />
                <Label>Serviço</Label>
                <InputServico />
                <Label>Horário</Label>
                <InputHorario />
                <Label>Data</Label>
                <InputData />
            </ModalContent>
        </Backdrop>
    )
};

const Backdrop = styled.div`
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
`;

const ImgClose = styled.img``;

const Label = styled.label`
`;


export default ModalAgendamento;