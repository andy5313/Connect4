import React, { useEffect } from "react";
import styled from "styled-components";

const Tile = styled.div`
    background-color: ${props => (props.status === 'red' ? `red` : `black`)};
    border : 1px white solid;
    display: inline-block;
    width: 50px;
    height: 50px;

`;


const Square = ({status, index, handleClick}) => {

    return (
        <React.Fragment>
            <Tile onClick={(e) => handleClick(Number(e.target.dataset.index))} data-index={index} index={index} status={status}></Tile>
        </React.Fragment>
    )
}

export default Square;