import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from "./Slider_Styles"
import './../../styles/slider.css'

type SlidePropsType = {
    text: string
    userName: string
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.userName}</S.Name>
        </S.Slide>
    )
}


const responsive = {
    0: {items: 1},
    568: {items: 2},
    1024: {items: 3},
};

const items = [
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elit nibh, maximus ac arcu\n" +
        "                in, ultrices gravida augue. Pellentesque molestie lorem a tellus ullamcorper, vel ultrices lorem\n" +
        "                mattis."}
           userName={"petr novak"}/>,
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elit nibh, maximus ac arcu\n" +
        "                in, ultrices gravida augue. Pellentesque molestie lorem a tellus ullamcorper, vel ultrices lorem\n" +
        "                mattis."}
           userName={"user name"}/>,
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elit nibh, maximus ac arcu\n" +
        "                in, ultrices gravida augue. Pellentesque molestie lorem a tellus ullamcorper, vel ultrices lorem\n" +
        "                mattis."}
           userName={"name user"}/>,
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>

);


// import React from 'react';
// import {FlexWrapper} from "../FlexWrapper";
// import {S} from "./Slider_Styles"
//
//
// export const Slider: React.FC = () => {
//     return (
//         <S.Slider>
//             <FlexWrapper>
//                 <S.Slide>
//                     <S.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elit nibh, maximus ac arcu
//                         in, ultrices gravida augue. Pellentesque molestie lorem a tellus ullamcorper, vel ultrices lorem
//                         mattis.</S.Text>
//                     <S.Name>@petr novak</S.Name>
//                 </S.Slide>
//             </FlexWrapper>
//             <S.Pagination>
//                 <span></span>
//                 <span className={"active"}></span>
//                 <span></span>
//             </S.Pagination>
//         </S.Slider>
//     );
// };
