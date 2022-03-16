import React, { useState } from "react";
import styled from "styled-components"
import TableHeader from "./TableHeader/table";
import ModalDelete from "../ConfirmDelete/Delete";
import deletar from "../../assets/icons/Deletar.svg";
import { useHook } from "../../Context/state";

function List(){
    const {userContext} = useHook();
    const {form, setForm} = userContext;
    const [idItemDelete, setIdItemDelete] = useState(null);

    const handleDeleteItem = index => {
        let agendamento = form;
        agendamento.splice(index, 1)

        setForm(agendamento)
        setIdItemDelete(null)
    }

    function handleOrder(newForm){
        setForm(newForm)
    }

    return (
        <Table>
            <TableHeader 
                form={form}
                handleOrder={handleOrder}
            />
            <TableBody>
            {form.map((item, id) => 
                    <TableLine key={id}>
                    <LineItems>{item.nome}</LineItems>
                    <LineItems>{item.data}</LineItems>
                    <LineItems>{item.horario}</LineItems>
                    <LineItems>{item.servico}</LineItems>
                    <LineItems>{item.cliente}</LineItems>
                        <LineItems>
                            <ImgDelete 
                                className='cursor-pointer' 
                                src={deletar} 
                                alt='delete icon'
                                onClick={() => setIdItemDelete(id)}
                            />
                            <ModalDelete 
                                show={id === idItemDelete} 
                                setClose={() => setIdItemDelete(null)}
                                message="Serviço concluído?"
                                handleConfirm={() => handleDeleteItem(id)}
                            />
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
    color: #646464;
`;

const ImgDelete = styled.img`
    margin-left: -100px;
    margin-right: 40px;
    cursor: pointer;
`;

export default List;