import React from "react";
import styled from "styled-components"
import TableHeader from "./TableHeader/table";
import deletar from "../../assets/icons/Deletar.svg";
import { useHook } from "../../Context/state";

function List(){
    const {userContext} = useHook();
    const {form} = userContext;

    return (
        <Table>
            <TableHeader />
            <TableBody>
            {form.map((item) => 
                    <TableLine key={item}>
                    <LineItems>{item.nome}</LineItems>
                    <LineItems>{item.data}</LineItems>
                    <LineItems>{item.horario}</LineItems>
                    <LineItems>{item.servico}</LineItems>
                    <LineItems>{item.cliente}</LineItems>
                        <LineItems>
                            <ImgDelete className='cursor-pointer' src={deletar} alt='delete icon'/>
                        </LineItems>
                    </TableLine>
            )}
            </TableBody>
        </Table>
        
    )
};

const Table = styled.div`
    width: 930px;
    margin-left: -50px;
`;

const TableBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 940px;
`;

const TableLine = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #E0E0E0;
`;

const LineItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 150px;
    height: 55px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 13px;
`;

const ImgEdit = styled.img`
    margin-right: 5px;
    cursor: pointer;
`;

const ImgDelete = styled.img`
    cursor: pointer;
`;

export default List;