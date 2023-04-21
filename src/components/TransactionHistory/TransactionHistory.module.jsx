import styled from "@emotion/styled";

export const TransactionTable = styled.table`
    overflow: hidden;
    text-transform: capitalize;
    
    width: 100%;

    margin-left: 16px;
    margin-bottom: 20px;

    background: rgba(142, 227, 212, 0.22);
    
    border-spacing: 0;
    border-radius: 18px;

    @media screen and (max-width: 424.98px){
        width: 300px;
        margin: auto;
    }
`
export const TableThead = styled.thead`
    font-size: 16px;
    line-height: 1.18;
        
    background-color: #13D4B4;
`
export const TableTbody = styled.tbody`
    font-size: 12px;
`
export const TableTr = styled.tr``
export const TableTh = styled.th`
    padding: 6px;
`
export const TableTd = styled.td``