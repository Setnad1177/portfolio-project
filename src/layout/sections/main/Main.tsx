import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <SmallText>Hi There </SmallText>
                        <Name>I am <span>Andrew</span></Name>
                        <MainTitle>The Software Developer.</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 80vh;
    background-color: ${theme.colors.secondaryBg};
    display: flex;
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    
    &::before {
        content: "";
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;

        @media {
            width: 314px;
            height: 414px;
            top: -17px;
            left: 20px;
        }
    }

    @media ${theme.media.mobile} {
        margin-top: 65px;
    }
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 20px;

    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`

const SmallText = styled.h2`
    font-weight: 400;
    font-size: 14px;
`

const Name = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36})}
    letter-spacing: 0.05em;
    margin: 10px 0px;

    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;

        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }

    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    }
`

const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
    ${font({weight: 400, Fmax: 27, Fmin: 20})}
`