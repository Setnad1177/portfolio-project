import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There </span>
                    <h2>I am Andrew</h2>
                    <h1>The Software Developer.</h1>
                </div>

                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
min-height: 100vh;
background-color: #fff5e7;
`

const Photo = styled.img`
width: 350px;
height: 430px;
object-fit:cover;
`
