import styled from "@emotion/styled";

export const StatisticsWrapper = styled.section`
  margin: 24px auto;
  padding: 12px;

  background: rgba(142, 227, 212, 0.22) ;
  border-radius: 18px;
`
export const StatisticsTitle = styled.h2`
    font-size: 24px;    
    margin:0;
    margin-bottom: 18px;
    color: #000000;
`
export const StatList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
`
export const StatItem = styled.li`
    display: grid;
    justify-items: center;
    width: 128px;
    padding: 6px;
    :first-of-type{
        border-radius: 12px 0 0 12px;
    }
    :last-child{
        border-radius: 0 12px 12px 0;
    }
`
export const ItemLabel = styled.span`
    font-weight: 400;
    font-size: 12px;
    color: #dcdcd5;
`
export const ItemPercentage = styled.span`
    font-weight: 700;
    font-size: 24px;
    color: #ffffff;
`