import React, {useState} from "react";
import styled from "styled-components";
import ModalCadastro from "../ModalCadastro/ModalCadastro.js";

const Cadastro = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <ContainerAgendamento>
                <TextAgendar>Cadastrar Barbeiro</TextAgendar>
                <ButtonAgendar onClick={() => setOpen(true)}>
                    Cadastrar
                </ButtonAgendar>
            </ContainerAgendamento>
            {open && <ModalCadastro open={open} setOpen={setOpen}/>}
        </>
    )
};

const ContainerAgendamento = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    height: 130px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    position: fixed;

    background: #FAFAFA;
    box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 26px 30px;
    transition: all 0.5s;

    :hover {
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
    filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
`;

const TextAgendar = styled.div`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    margin-top: 20px;
`;

const ButtonAgendar = styled.button`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 150px;
    height: 42px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    margin-top: 30px;
    background: linear-gradient(91.26deg, #696969 0%, #808080 97.77%);
    border: 0px;
    border-radius: 5px;
    color: #FFFFFF;
    cursor: pointer;
`;

export default Cadastro;