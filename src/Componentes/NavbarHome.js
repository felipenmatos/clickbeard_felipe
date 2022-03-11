import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarHome = () => {

    return (
        <Div>
            <Text>ClickBeard</Text>
            <Link to="/LoginClientes">
                <Button>Sair</Button>
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
    width: 120px;
    height: 30px;
    margin-top: 25px;
    margin-right: 25px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    color: #fff;
    background: #696969;
    border: 0px;
    border-radius: 16px;
    cursor: pointer;

    :hover {
        background: rgb(69, 69, 69, 0.9);
    }
`;

export default NavbarHome;