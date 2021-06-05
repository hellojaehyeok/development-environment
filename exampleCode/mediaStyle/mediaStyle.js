import React from "react";
import { useMediaQuery } from "react-responsive";
// 리액트 스타일 컴포넌트
import styled from "styled-components";

function Media (mediaPx, array){
    return(`
        @media (max-width: ${mediaPx}px) {
            ${array.join(";") + ";"}
        }
    `)
}

function Px(elPx, totalPx){
    return (`calc(100vw*(${elPx}/${totalPx}))`);
}

function Width(elPx, totalPx){
    return (`width:calc(100vw*(${elPx}/${totalPx}));`);
}

function Height(elPx, totalPx){
    return (`height:calc(100vw*(${elPx}/${totalPx}));`);
}

function Top(elPx, totalPx){
    return (`top:calc(100vw*(${elPx}/${totalPx}));`);
}

function Bottom(elPx, totalPx){
    return (`bottom:calc(100vw*(${elPx}/${totalPx}));`);
}

function Left(elPx, totalPx){
    return (`left:calc(100vw*(${elPx}/${totalPx}));`);
}

function Right(elPx, totalPx){
    return (`right:calc(100vw*(${elPx}/${totalPx}));`);
}

function FontSize(elPx, totalPx){
    return (`font-size:calc(100vw*(${elPx}/${totalPx}));`);
}

function Margin(top, left, bottom, right, totalPx){
    return (`margin:calc(100vw*(${top}/${totalPx})) calc(100vw*(${left}/${totalPx})) calc(100vw*(${bottom}/${totalPx})) calc(100vw*(${right}/${totalPx}));`);
}

function Margin2(topBottom, leftRight, totalPx){
    return (`margin:calc(100vw*(${topBottom}/${totalPx})) calc(100vw*(${leftRight}/${totalPx}))`);
}

function MT(elPx, totalPx){
    return (`margin-top:calc(100vw*(${elPx}/${totalPx}));`);
}

function MB(elPx, totalPx){
    return (`margin-bottom:calc(100vw*(${elPx}/${totalPx}));`);
}

function ML(elPx, totalPx){
    return (`margin-left:calc(100vw*(${elPx}/${totalPx}));`);
}

function MR(elPx, totalPx){
    return (`margin-right:calc(100vw*(${elPx}/${totalPx}));`);
}

function Padding(top, left, bottom, right, totalPx){
    return (`padding:calc(100vw*(${top}/${totalPx})) calc(100vw*(${left}/${totalPx})) calc(100vw*(${bottom}/${totalPx})) calc(100vw*(${right}/${totalPx}));`);
}

function Padding2(topBottom, leftRight, totalPx){
    return (`padding:calc(100vw*(${topBottom}/${totalPx})) calc(100vw*(${leftRight}/${totalPx}))`);
}

function PT(elPx, totalPx){
    return (`padding-top:calc(100vw*(${elPx}/${totalPx}));`);
}

function PB(elPx, totalPx){
    return (`padding-bottom:calc(100vw*(${elPx}/${totalPx}));`);
}

function PL(elPx, totalPx){
    return (`padding-left:calc(100vw*(${elPx}/${totalPx}));`);
}

function PR(elPx, totalPx){
    return (`padding-right:calc(100vw*(${elPx}/${totalPx}));`);
}

function LineH(elPx, totalPx){
    return (`line-height:calc(100vw*(${elPx}/${totalPx}));`);
}



// 모바일 분기처리
const Mobile : React.FC = ({children}) => {
    const isMobile = useMediaQuery({query : "(max-width:1024px)"});
    return <React.Fragment>{isMobile && children}</React.Fragment>
}

// PC 분기처리
const PC  : React.FC = ({children}) => {
    const isPc = useMediaQuery({query : "(min-width:1025px) "});
    return <React.Fragment>{isPc && children}</React.Fragment>
}

export {
    styled,
    Mobile,PC,
    Media,
    Px,
    Width,
    Height,
    Top,
    Bottom,
    Left,
    Right,
    FontSize,
    Margin,
    Margin2,
    Padding,
    Padding2,
    MT,
    MB,
    ML,
    MR,
    PT,
    PB,
    PL,
    PR,
    LineH,
};