import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../Componentes/Navbar";
import Background1 from "../assets/background.jpg";
import Mostrar from "../assets/icons/mostrar.svg";
import Ocultar from "../assets/icons/ocultar.svg";

const LoginBarbeiro = () => {
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClickPassword = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();

        if(password.length === 0 || email.length === 0) {
            setError(true)
        } else if (!email.includes("@")) {
            setError(true)
        } else if (!email.includes(".com")) {
            setError(true)
        } else {
            navigate("/HomeBarbeiro");
        }
    }

    function handleRegister() {
        navigate("/CadastroBarbeiro")
    }
    
    return (
        <Container style={{backgroundImage: `url(${Background1})`}}>
            <Navbar />
            <DivLogin>
                <Form onSubmit={handleSubmit}>
                    <Text>Faça seu login</Text>
                    <Label>E-mail</Label>
                    <InputEmail
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    type="text"
                    placeholder="Digite seu e-mail"
                    maxLength={100}
                    />
                    {showPassword ? 
                        (
                        <IMG 
                        src={Mostrar}
                        className="mostrarSenha"
                        alt="Mostrar Senha"
                        onClick={handleClickPassword}
                        />
                        ) : (
                        <IMG 
                        src={Ocultar}
                        className="ocultarSenha"
                        alt="Ocultar Senha"
                        onClick={handleClickPassword}
                        />
                        )}
                    <Label>Senha</Label>
                    <InputPassword
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                    maxLength={50}
                    />
                    {error ? (
                            <ErrorText className="Error">
                                Dados não conferem! É preciso estar cadastrado.
                            </ErrorText>
                            ) : (
                                <></>
                            )
                    }

                    <NextButton type="submit" onClick={() => handleSubmit()}>Entrar</NextButton>
                    <TextRegister>Não possui conta? <LinkA onClick={() => handleRegister()}>Cadastre-se</LinkA></TextRegister>
                </Form>
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
    width: 50%;
    height: 80%;
    margin-top: 60px;
    margin-left: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    align-items: center;
    width: 400px;
    height: 380px;
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

const InputPassword = styled.input`
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

const IMG = styled.img`
    margin-top: 217px;
    margin-bottom: 10px;
    margin-left: 120px;
    width: 20px;
    height: 20px;
    position: fixed;
    cursor: pointer;
`;

const TextRegister = styled.p`
    color: #FFF;
`;

const LinkA = styled.button`
    color: red;
    text-decoration: underline;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    border: 0px;
`;

export default LoginBarbeiro;