//import ordenar from '../../../assets/ordenar.svg';
//import desordenar from '../../../assets/desordenar.svg';
import { useState } from 'react';
import styled from "styled-components";

function TableHeader(){
    const [filter, setFilter] = useState('date');
    const [order, setOrder] = useState('asc');

    function handleChangeFilter(type){
        if (filter === type) {
            setOrder(order === 'asc' ? 'desc' : 'asc')
            return;
        }
        setFilter(type);
    }

    return (
        <TableHead>
            <ColumnTitle
            onClick={() => handleChangeFilter('date')}
            >
                <Span>Barbeiro</Span>
                {filter === 'date' &&
                <img 
                
                alt='ordenar'
                />
            }
            </ColumnTitle>
            <ColumnTitle 
            onClick={() => handleChangeFilter('weekDay')}
            >
                <Span>Data</Span>
                {filter === 'weekDay' &&
                <img 
                 
                alt='ordenar'
                />
            }
            </ColumnTitle>
            <ColumnTitle>
                <Span>Horário</Span>
            </ColumnTitle>
            <ColumnTitle>
                <Span>Serviço</Span>
            </ColumnTitle>
            <ColumnTitle 
            onClick={() => handleChangeFilter('value')}
            >
                <Span>Valor</Span>
                {filter === 'value' &&
                <img 
                 
                alt='ordenar'
                />
            }
            </ColumnTitle>
        </TableHead>
    )
};

const TableHead = styled.div`
    height: 40px;
    width: 780px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FAFAFA;
    box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`;

const ColumnTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 150px;

    cursor: pointer;
`;

const Span = styled.span`
    margin-right: 5px;
`;

export default TableHeader;