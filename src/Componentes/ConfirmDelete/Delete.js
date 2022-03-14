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
    width: 80px;
    margin-right: -80px;
    background: red;
`;

const Div = styled.div`

`;

const Span = styled.span`

`;

const ButtonConfirm = styled.button`

`;

const ButtonNo = styled.button`

`;

export default ModalDelete;