import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {

    return (
        <Div>
            <Text>ClickBeard</Text>
            <Link to="/LoginClientes">
                <Button>Entrar como Cliente</Button>
            </Link>
        </Div>
    )
}

const Div = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: transparente;
`;

const Text = styled.h1`
    margin-left: 20px;
    color: #FFF;
    font-family: 'Sansita Swashed', cursive;
`;

const Button = styled.button`
    width: 200px;
    height: 30px;
    margin-top: 25px;
    margin-right: 25px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    color: #FFF;
    background: rgb(135, 75, 15, 0.7);
    border: 0px;
    border-radius: 16px;
    cursor: pointer;
`;

export default Navbar;