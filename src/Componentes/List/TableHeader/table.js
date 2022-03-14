import styled from "styled-components";

function TableHeader(){

    return (
        <TableHead>
            <ColumnTitle>
                <Span>Barbeiro</Span>
            </ColumnTitle>
            <ColumnTitle>
                <Span>Data</Span>
            </ColumnTitle>
            <ColumnTitle>
                <Span>Horário</Span>
            </ColumnTitle>
            <ColumnTitle>
                <Span>Serviço</Span>
            </ColumnTitle>
            <ColumnTitle>
                <Span>Cliente</Span>
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
    font-family: 'Ubuntu', sans-serif;
`;

export default TableHeader;