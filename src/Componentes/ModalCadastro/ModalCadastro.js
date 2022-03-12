import React, { useState } from "react";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import close from '../../assets/icons/close-icon.svg';

const ModalCadastro = ({open, setOpen}) => {
    const [nomeBarbeiro, setNomeBarbeiro] = useState("");
    const [nomeCliente, setNomeCliente] = useState("");
    const [servico, setServico] = useState("");
    const [horario, setHorario] = useState("");
    const [data, setData] = useState("");
    const [errorHorario, setErrorHorario] = useState(false);
    console.log(data)

    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        setNomeBarbeiro(event.target.value)
        setNomeCliente(event.target.value)
        setServico(event.target.value)
        setHorario(event.target.value)
        setData(event.target.value)

        if(nomeCliente.value === 0) {
            setErrorHorario(true)
        } else {
            navigate("/HomeClientes")
        }

        /*if(horario.value < "08:00" || horario.value > "18:00") {
            setErrorHorario(true)
        } else {
            console.log("Entrou")
        }
        */
    }                                   


    return (
        <Backdrop>
            <ModalContent >
                <Form onSubmit={handleSubmit}>
                    <ImgClose 
                        className='iconClose' 
                        src={close}  
                        alt="close incon"
                        onClick={() => setOpen(false)} 
                    />
                    <Label>Nome</Label>
                    <InputName type="text" />
                    <Label>Especialidade</Label>
                    <DivServicos>
                        <DivSelect>
                            <InputSelect value={servico}  type="checkbox" name="Cabelo"/>
                            <Label>Cabelo</Label>
                        </DivSelect>
                        <DivSelect>
                            <InputSelect value={servico}  type="checkbox" name="Barba"/>
                            <Label>Barba</Label>
                        </DivSelect>
                        <DivSelect>
                            <InputSelect value={servico}  type="checkbox" name="Sobrancelha"/>
                            <Label>Sobrancelha</Label>
                        </DivSelect>
                    </DivServicos>
                    {errorHorario ? <Error>Não é possível agendar nesta data e horário.</Error> : <></>}
                    <ConfirmButton type="Submit" onClick={() => handleSubmit()}>Confirmar</ConfirmButton>
                </Form>
            </ModalContent>
        </Backdrop>
    )
};

const Backdrop = styled.div`
    display: flex; 
    position: fixed;
    justify-content: center; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fefefe;
    margin-top: 100px; 
    padding: 20px;
    border: 1px solid #888;
    width: 350px;
    height: 250px;
    border-radius: 16px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const ImgClose = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 90%;
    cursor: pointer;
`;

const Label = styled.label`
    font-family: 'Ubuntu', sans-serif;
    color: #000;
    margin-top: 15px;
    margin-bottom: 10px;
`;

const InputName = styled.input`
    height: 30px;
    padding: 0px 10px;
`;

const DivServicos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const DivSelect = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: row;
`;

const InputSelect = styled.input`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

const Error = styled.p``;

const ConfirmButton = styled.button`
    width: 180px;
    height: 30px;
    margin-left: 25%;
    margin-top: 30px;
    border-radius: 10px;
    background: #696969;
    font-family: 'Ubuntu', sans-serif;
    color: #fff;
    border: 0px;
    cursor: pointer;

    :hover {
        background: rgb(69, 69, 69, 0.9);
    }
`;

export default ModalCadastro;