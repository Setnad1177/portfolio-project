import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {S} from "./Slider_Styles"


export const Slider: React.FC = () => {
    return (
        <S.Slider>
            <FlexWrapper>
                <S.Slide>
                    <S.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elit nibh, maximus ac arcu
                        in, ultrices gravida augue. Pellentesque molestie lorem a tellus ullamcorper, vel ultrices lorem
                        mattis.</S.Text>
                    <S.Name>@petr novak</S.Name>
                </S.Slide>
            </FlexWrapper>
            <S.Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </S.Pagination>
        </S.Slider>
    );
};
