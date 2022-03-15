import React, { useState } from "react";
import InputMask from "react-input-mask";
//import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import close from '../../assets/icons/close-icon.svg';
import { useHook } from "../../Context/state";

function ModalAgendamento({ open, setOpen }){
    const [nomeCliente, setNomeCliente] = useState("");
    const [servico, setServico] = useState();
    const [horario, setHorario] = useState("");
    const [data, setData] = useState("");
    const [error, setError] = useState(false);
    const nome = localStorage.getItem('nome');
    const {userContext} = useHook();
    const {form, setForm, nomeBarbeiro, setNomeBarbeiro} = userContext;

    function handLeSubmit(e){
        e.preventDefault()
    }

    function validador(){
        if( nomeCliente.length === 0 || data.length ===0 || horario.length === 0){
            setError(true)
        } else {
            setError(false)
            setOpen(false)
            handleRegister()
        }
    }
    
    const handleRegister = async (e) => {
        setForm([ ...form, {
            nome: nomeBarbeiro,
            cliente: nomeCliente,
            servico: servico,
            horario: horario,
            data: data,
        }])
    }

    return (
        <Backdrop>
            <ModalContent >
                <Form onSubmit={handLeSubmit}>
                    <ImgClose 
                        className='iconClose' 
                        src={close}  
                        alt="close incon"
                        onClick={() => setOpen(false)}
                    />
                    <Label for="card">Barbeiro</Label>
                    <Select onChange={(e) => setNomeBarbeiro(e.target.value)} id="card" >
                        <Option value={nomeBarbeiro}>{nomeBarbeiro}</Option>
                    </Select>

                    <Label>Cliente</Label>
                    <InputCliente 
                        type="text"
                        placeholder={nome}
                        value={nomeCliente}
                        onChange={(e) => setNomeCliente(e.target.value)}
                    />

                    <Label>Serviço</Label>
                    <Select name="Serviço" value={servico} onChange={e => setServico(e.target.value)} >
                        <Option value="">Selecione Serviço</Option>
                        <Option value="Cabelo">Cabelo</Option>
                        <Option value="Barba">Barba</Option>
                        <Option value="Sobrancelha">Sobrancelha</Option>
                    </Select>
                    <Label>Horário</Label>
                    <InputHorario 
                        type="text"
                        placeholder="00:00"
                        value={horario}
                        mask="99:99"
                        onChange={(e) => setHorario(e.target.value)}
                    />

                    <Label>Data</Label>
                    <InputData 
                        type="text"
                        value={data}
                        mask="99/99/9999"
                        onChange={(e) => setData(e.target.value)}
                    />
                    {error ? <Error>Não foi possível agendar neste horário e data</Error> : <></>}

                    <ConfirmButton type="submit" onClick={(e) => validador(e.target.value)}>Confirmar</ConfirmButton>
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
    height: 400px;
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
    margin-top: 5px;
    margin-bottom: 10px;
`;

const Select = styled.select`
    height: 25px;
`;

const Option = styled.option`
    font-family: 'Ubuntu', sans-serif;
    color: #000;
    height: 25px;
`;

const InputCliente = styled.input`
    height: 25px;
    padding: 0px 10px;
`;

const InputHorario = styled(InputMask)`
    height: 25px;
    cursor: pointer;
`;

const InputData = styled(InputMask)`
    height: 25px;
    cursor: pointer;
`;

const Error = styled.p`
    font-family: 'Ubuntu', sans-serif;
    font-size: 14px;
    margin-top: 2px;
    margin-left: 30px;
    margin-bottom: -18px;
    color: red;
`;

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

export default ModalAgendamento;