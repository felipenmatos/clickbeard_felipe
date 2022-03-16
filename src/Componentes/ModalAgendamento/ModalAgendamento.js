import React, { useState } from "react";
import InputMask from "react-input-mask";
import styled from "styled-components";
import close from '../../assets/icons/close-icon.svg';
import { useHook } from "../../Context/state";

function ModalAgendamento({ open, setOpen }){
    const [selectValue, setSelectValue] = useState(1);
    const [servico, setServico] = useState();
    const [horario, setHorario] = useState("");
    const [data, setData] = useState("");
    const [error, setError] = useState(false);
    const [errorMensage, setErrorMensage] = useState(false);
    const {userContext} = useHook();
    const {form, setForm, nomeBarbeiro} = userContext;
    const nome = localStorage.getItem('nome');

    function handLeSubmit(e){
        e.preventDefault()
    }

    function validador(){
        if(data.length ===0 || horario.length === 0){
            setErrorMensage(true)
        } else if (horario.slice(0, 1) < 1 && horario.slice(1, 2) < 8) {
            setError(true)
        } else if (horario.slice(0, 1) > 0 && horario.slice(1, 2) > 8) {
            setError(true)
        } else if (horario.slice(0, 1) > 0 && horario.slice(1, 2) > 8) {
            setError(true)
        } else if (horario.slice(0, 1) > 1) {
            setError(true)
        } else {
            setError(false)
            setOpen(false)
            handleRegister()
        }
    }
    
    const handleRegister = async (e) => {
        setForm([ ...form, {
            nome: selectValue,
            cliente: nome,
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
                    <Select value={selectValue} onChange={e => setSelectValue(e.target.value)} id="card" >
                        <Option>Selecione o Barbeiro</Option>
                        {nomeBarbeiro.map((item, index) => (
                            <Option value={item.id}>{item.nome}</Option>
                        ))}
                    </Select>
                    <Label>Serviço</Label>
                    <Select name="Serviço" value={servico} onChange={e => setServico(e.target.value)} >
                        <Option value="">Selecione Serviço</Option>
                        <Option value="Cabelo">Cabelo</Option>
                        <Option value="Barba">Barba</Option>
                        <Option value="Sobrancelha">Sobrancelha</Option>
                        <Option value="Cabelo e Barba">Cabelo e Barba</Option>
                        <Option value="Cabelo e Barba">Cabelo e Sobranc.</Option>
                        <Option value="Cabelo e Barba">Barba e Sobranc.</Option>
                        <Option value="Barba, Barba e Sobranc.">Barba, Barba e Sobranc.</Option>
                    </Select>
                    <Label>Horário</Label>
                    <InputHorario 
                        type="time"
                        placeholder="00:00"
                        value={horario}
                        onChange={(e) => setHorario(e.target.value)}
                    />

                    <Label>Data</Label>
                    <InputData 
                        type="text"
                        value={data}
                        placeholder="dd/mm/aaaa"
                        mask="99/99/9999"
                        onChange={(e) => setData(e.target.value)}
                    />
                    {error ? <Error>Neste horário o estabelecimento está fechado!</Error> : <></>}
                    {errorMensage ? <ErrorMensage>Não foi permitido agendar, preencha os dados</ErrorMensage> : <></>}
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
    height: 330px;
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
    border: 1px solid #ADADAD;
    border-radius: 4px;
    color: #646464;
    cursor: pointer;

    :focus{
    outline: 0;
    }
    
    ::placeholder{
        color: #ADADAD;
    }
`;

const Option = styled.option`
    font-family: 'Ubuntu', sans-serif;
    color: #646464;
    height: 25px;
`;

const InputHorario = styled.input`
    height: 25px;
    cursor: pointer;
`;

const InputData = styled(InputMask)`
    height: 25px;
    cursor: pointer;
    border: 1px solid #ADADAD;
    border-radius: 4px;
    color: #646464;

    :focus{
    outline: 0;
    }
    
    ::placeholder{
        color: #ADADAD;
    }
`;

const Error = styled.p`
    font-family: 'Ubuntu', sans-serif;
    font-size: 14px;
    margin-top: 2px;
    margin-left: 25px;
    margin-bottom: -18px;
    color: red;
`;

const ErrorMensage = styled.p`
    font-family: 'Ubuntu', sans-serif;
    font-size: 14px;
    margin-top: 2px;
    margin-left: 20px;
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