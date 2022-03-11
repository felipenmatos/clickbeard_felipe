import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Background1 from "../assets/background.jpg";
import NavbarClientes from "../Componentes/NavbarClientes";

const CadastroCliente2 = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");

    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();

        if(email.length === 0) {
            setError(true)
        } else if (!email.includes("@")) {
            setError(true)
        } else if (!email.includes(".com")) {
            setError(true)
        } else {
            navigate("/CadastroCliente3");
        }
    }

    function handleLogin() {
        navigate("/LoginClientes")
    }
    
    return (
        <Container style={{backgroundImage: `url(${Background1})`}}>
            <NavbarClientes />
            <DivLogin>
                <Form onSubmit={handleSubmit}>
                    <Text>Informe seu Email</Text>
                    <Label>E-mail</Label>
                    <InputEmail
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    type="text"
                    placeholder="Digite seu email"
                    maxLength={80}
                    />
                    {error ? (
                            <ErrorText className="Error">
                                É preciso preencher um e-mail válido.
                            </ErrorText>
                            ) : (
                                <></>
                            )
                    }

                    <NextButton type="submit" onClick={() => handleSubmit()}>Próximo</NextButton>
                </Form>
                <DivRegister>
                    <TextRegisterClient>Já possui cadastro?</TextRegisterClient>
                    <ButtonRegisterClient type="submit" onClick={() => handleLogin()}>Login</ButtonRegisterClient>
                </DivRegister>
            </DivLogin>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    margin-top: -22px;
    padding: 0;
    margin: 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
`;

const DivLogin = styled.div`
    width: 60%;
    height: 80%;
    margin-top: 60px;
    margin-left: 220px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    align-items: center;
    width: 400px;
    height: 330px;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 16px;
`;

const Text = styled.h1`
    color: #fff;
`;

const Label = styled.label`
    color: #fff;
    margin-top: 20px;
    margin-left: -240px;
`;

const InputEmail = styled.input`
    width: 270px;
    height: 30px;
    margin-top: 10px;
    padding: 0px 10px ;
`;

const ErrorText = styled.p`
    color: red;
    font-size: 15px;
    margin-top: 7px;
    margin-bottom: -24px;
`;

const NextButton = styled.button`
    width: 180px;
    height: 30px;
    margin-top: 40px;
    font-size: 15px;
    border-radius: 10px;
    border: 0px;
    cursor: pointer;
`;

const DivRegister = styled.div`
    display: flex;
    flex-direction:column ;
`;

const TextRegisterClient = styled.h1`
    color: #FFF;
`;

const ButtonRegisterClient = styled.button`
    width: 200px;
    height: 30px;
    margin-left: 17px;
    color: #FFF;
    background: rgba(0, 0, 0, 0.8);
    font-size: 16px;
    border: 0px;
    border-radius: 16px;
    cursor: pointer;
`;

export default CadastroCliente2;