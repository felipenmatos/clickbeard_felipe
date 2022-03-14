import React, { useState } from "react";
import styled from "styled-components";
import close from '../../assets/icons/close-icon.svg';
import { useHook } from "../../Context/state";

const ModalCadastro = ({open, setOpen}) => {
    const {userContext} = useHook();
    const [nome, setNome] = useState("") 
    const {nomeBarbeiro, setNomeBarbeiro} = userContext;
    const [servico, setServico] = useState("");
    const [error, setError] = useState(false);

    //const navigate = useNavigate()
    function handLeSubmit(e){
        e.preventDefault()
    }

    function validador(){
        if(nome.length === 0) {
            setError(true);
        } else {
            setError(false)
            setOpen(false)
            handleRegisterBarbeiro()
        }
    }

    const handleRegisterBarbeiro = async (e) => {
        setNomeBarbeiro([...nomeBarbeiro, {
            nome: nome
        }]);
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
                    <Label>Nome</Label>
                    <InputName 
                        value={nome}
                        type="text"
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <Label>Especialidade</Label>
                    <DivServicos>
                        <DivSelect>
                            <InputSelect 
                            value={servico}  
                            type="checkbox" 
                            name="Cabelo"
                            setServico={(e) => setServico(e.target.value)}
                        />
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
                    {error ? <Error>Não foi possível efetuar cadastro.</Error> : <></>}
                    <ConfirmButton onClick={(e) => validador(e.target.value)}>Confirmar</ConfirmButton>
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

const Error = styled.p`
    font-family: 'Ubuntu', sans-serif;
    font-size: 14px;
    margin-top: 2px;
    margin-left: 70px;
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

export default ModalCadastro;