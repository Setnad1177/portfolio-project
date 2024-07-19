import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";

export const GoTopBtn = () => {
    return (
        <StyledGoBtn onClick={() => {scroll.scrollToTop()}}>
            <Icon iconId={"arrowGoTop"} height={"15"} width={"16"} viewBox={"0 0 16 15"}/>
        </StyledGoBtn>
    );
};

const StyledGoBtn = styled.button`
    background-color: rgba(0,0,0,0.3);
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px
    
`