import styled from "styled-components"

import CheckmarkDefault from "../../../../../../svgs/checkmark.svg"
import CloseDefault from "../../../../../../svgs/close.svg"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    max-width: 1144px;
    width: 100%;
    padding-bottom: 10px;

    @media (min-width: 1024px) {
        overflow-x: auto;
    }
`

export const Table = styled.table`
  width: 100%;
  flex: 1;
  margin: 0 auto;
  border-collapse: separate !important;
  border-spacing: 0;
  border: 2px solid #D7DCE5;
  border-radius: 24px;
  overflow: hidden;
`

export const Head = styled.thead`
    font-weight: 400;
    font-size: 20px;
`

export const TableLine = styled.tr`
`

export const LineHead = styled.th`
    border: none;
    background-color: #EEF1FD;
    color: #04192B;
    padding: 28px;
    text-align: center;
`

export const Body = styled.tbody`
    font-weight: 400;
    font-size: 20px;
    text-align: center;

    td:first-of-type {
        text-align: left;
    }
`

export const LineBody = styled.td`
    border: none;
    border-top: 2px solid #D7DCE5;
    padding: 28px;
    color: #04192B;
    background-color: #F6F8FE;

    span {
        font-weight: 600;
    }
`

export const Checkmark = styled(CheckmarkDefault)`
    width: 28px;
    height: 28px;
`

export const Close = styled(CloseDefault)`
    width: 21px;
    height: 21px;
`
