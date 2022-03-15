import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Background1 from "../assets/background.jpg";
import Mostrar from "../assets/icons/mostrar.svg";
import Ocultar from "../assets/icons/ocultar.svg";
import NavbarClientes from "../Componentes/NavbarClientes";
import { useHook } from "../Context/state";

const LoginClientes = () => {
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const { userContext } = useHook();
    const {email, password} = userContext;
    console.log(email)

    const handleClickPassword = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();

        if(passwordLogin.length === 0 || emailLogin.length === 0 || passwordLogin !== password || emailLogin !== email) {
            setError(true)
        } else if (!emailLogin.includes("@")) {
            setError(true)
        } else if (!emailLogin.includes(".com")) {
            setError(true)
        } else {
            navigate("/HomeClientes");
        }
    }

    function handleRegister() {
        navigate("/CadastroCliente1")
    }
    
    return (
        <Container style={{backgroundImage: `url(${Background1})`}}>
            <NavbarClientes />
            <DivLogin>
                <Form onSubmit={handleSubmit}>
                    <Text>Faça seu login</Text>
                    <Label>E-mail</Label>
                    <InputEmail
                    value={emailLogin}
                    onChange={e => setEmailLogin(e.target.value)} 
                    type="text"
                    placeholder="Digite seu e-mail"
                    maxLength={100}
                    />
                    
                    <Label>Senha</Label>
                    <InputPassword
                    value={passwordLogin}
                    onChange={e => setPasswordLogin(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
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
                    {error ? (
                            <ErrorText className="Error">
                                Dados não conferem! É preciso estar cadastrado.
                            </ErrorText>
                            ) : (
                                <></>
                            )
                    }

                    <NextButton type="submit" onClick={() => handleSubmit()}>Entrar</NextButton>
                </Form>
                <DivRegister>
                    <TextRegisterClient>Não possui cadastro?</TextRegisterClient>
                    <ButtonRegisterClient type="submit" onClick={() => handleRegister()}>Cadastre-se</ButtonRegisterClient>
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
    height: 380px;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 16px;
    transition: all 0.5s;

    :hover {
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
    filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
}
`;

const Text = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    color: #fff;
`;

const Label = styled.label`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    color: #fff;
    margin-top: 20px;
    margin-left: -240px;
`;

const InputEmail = styled.input`
    width: 270px;
    height: 30px;
    margin-top: 10px;
    padding: 0px 10px ;
    color: #646464;

    :focus{
    outline: 0;
    }
    
    ::placeholder{
        color: #ADADAD;
    }
`;

const InputPassword = styled.input`
    width: 270px;
    height: 30px;
    margin-top: 10px;
    padding: 0px 10px ;
    color: #646464;

    :focus{
    outline: 0;
    }
    
    ::placeholder{
        color: #ADADAD;
    }
`;

const ErrorText = styled.p`
    color: red;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: -28px;
`;

const NextButton = styled.button`
    width: 180px;
    height: 30px;
    margin-top: 40px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    font-size: 15px;
    border-radius: 10px;
    border: 0px;
    cursor: pointer;
`;

const IMG = styled.img`
    margin-top: -27px;
    margin-left: 230px;
    width: 20px;
    height: 20px;
    position: relative;
    cursor: pointer;
`;

const DivRegister = styled.div`
    display: flex;
    flex-direction:column ;
`;

const TextRegisterClient = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    color: #FFF;
`;

const ButtonRegisterClient = styled.button`
    width: 200px;
    height: 30px;
    margin-left: 40px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    color: #FFF;
    background: rgba(0, 0, 0, 0.8);
    font-size: 16px;
    border: 0px;
    border-radius: 16px;
    cursor: pointer;
`;

export default LoginClientes;