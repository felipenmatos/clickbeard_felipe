import React from "react";
import styled from "styled-components";

const Navbar = () => {

    return (
        <Div>
            <Text>ClickBeard</Text>
            <Button>Entrar como Cliente</Button>
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
`;

const Button = styled.button`
    width: 200px;
    height: 30px;
    margin-top: 25px;
    margin-right: 25px;
    color: #FFF;
    background: rgba(0, 0, 0, 0.8);
    border: 0px;
    border-radius: 16px;
    cursor: pointer;
`;

export default Navbar;