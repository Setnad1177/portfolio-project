import React from 'react';
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt'

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There </S.SmallText>
                        <S.Name>I'm <span>Bc. Andrei K.</span></S.Name>
                        <S.MainTitle>
                            <p >The Software Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['The Software Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.MainTitle>
                    </div>
                    <Tilt>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
