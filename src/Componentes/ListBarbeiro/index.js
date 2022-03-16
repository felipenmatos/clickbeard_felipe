import React from "react";
import styled from "styled-components"
import TableHeader from "./TableHeader/tableHeader";
import { useHook } from "../../Context/state";

function ListAdm(){
    const {userContext} = useHook();
    const {form} = userContext;


    return (
        <TableContainer>
            <TableHeader />
            <TableBodyContainer>
                {form.map((item) => 
                    <TableLineContainer key={item}>
                    <LineItemsContainer>{item.nome}</LineItemsContainer>
                    <LineItemsContainer>{item.data}</LineItemsContainer>
                    <LineItemsContainer>{item.horario}</LineItemsContainer>
                    <LineItemsContainer>{item.servico}</LineItemsContainer>
                    <LineItemsContainer>{item.cliente}</LineItemsContainer>
                    </TableLineContainer>
                )}
            </TableBodyContainer>
        </TableContainer>
        
    )
};

const TableContainer = styled.div`
    width: 930px;
    margin-left: -10px;
`;

const TableBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 780px;
`;

const TableLineContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #E0E0E0;
`;

const LineItemsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 150px;
    height: 55px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 13px;
`;

const ImgCheck = styled.img`
    cursor: pointer;
`;

export default ListAdm;