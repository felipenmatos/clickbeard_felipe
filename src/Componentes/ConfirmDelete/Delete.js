import React from "react";
import styled from "styled-components";

function ModalDelete({show, setClose, message, handleConfirm }) {
    return (
        <>
            {show &&
            <Container>
                <Div></Div>
                <Span>{message}</Span>
                <ButtonConfirm onClick={() => handleConfirm()}>
                    Sim
                </ButtonConfirm>
                <ButtonNo onClick={() => setClose()}>
                    Não
                </ButtonNo>
            </Container>
            }
        </>
    )
}

const Container = styled.div`
    width: 110px;
    height: 70px;
    margin-top: 115px;
    margin-left: -40px;
    margin-right: -85px;
    padding: 7px;
    background: linear-gradient(91.26deg, #404040 0%, #707070 97.77%);
    border-radius: 4px;
    z-index: 1;
`;

const Div = styled.div`
    position: absolute;
    top: -10px;
    width: 0;
    height: 0;
    border-left: 8px solid trasparent;
    border-right: 8px solid trasparent;
    border-bottom: 10px solid #e4f2fd;    
`;

const Span = styled.span`
    display: block;
    font-size: 15px;
    font-family: 'Ubuntu', sans-serif;
    color: #FFF;
`;

const ButtonConfirm = styled.button`
    margin: 5px;
    padding: 10px;
    width: 45px;
    border: none;
    border-radius: 4px;
    font-size: 14px;

    :hover{
        opacity: 0.8;
    }
`;

const ButtonNo = styled.button`
    margin: 5px;
    padding: 10px;
    width: 45px;
    border: none;
    border-radius: 4px;
    font-size: 14px;

    :hover{
        opacity: 0.8;
    }
`;

export default ModalDelete;