import React from "react";
import styled from "styled-components"
import TableHeader from "./TableHeader/table";

function List(){
    return (
        <Table>
            <TableHeader />
            <TableBody>
                <TableLine>
                    <LineItems>Nome-Barbeiro</LineItems>
                    <LineItems>Data</LineItems>
                    <LineItems>Horario</LineItems>
                    <LineItems>Servico</LineItems>
                    <LineItems>Valor</LineItems>
                    <LineItems>
                        <img className='cursor-pointer'  alt='edit icon'/>
                        <img className='cursor-pointer' alt='delete icon'/>
                    </LineItems>
                </TableLine>
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
`;

export default List;