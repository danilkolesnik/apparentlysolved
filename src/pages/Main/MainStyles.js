import styled from 'styled-components';
import { font_cera_bold } from '../../assets/style/fonts_variables';

const MainPage = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const MainContent = styled.div`
    margin-top: 80px;
    min-height: 100vh;
`;

const CaptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const MainCaption = styled.h1`
    font-family: ${font_cera_bold};
    margin-left: 35px;
    font-size: 100px;
    width: 50vw;
`;

const UnderCaption = styled.h1`
    font-family: ${font_cera_bold};
    color: #EBEBF3;
    margin-left: 35px;
    font-size: 45px;
    width: 50vw;
`;

const FirstLayerHolder = styled.div`
    display: flex;
`;

const SecondLayerHolder = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    margin-top: -10px;
    min-height: 100vh;
`;

const LayerPic = styled.img`
    width: 100%;
`;

const SecondLayerCaption = styled.h1`
    font-family: ${font_cera_bold};
    color: #EBEBF3;
    margin: 0px auto 0px auto;
`;

export { MainPage, MainContent, CaptionWrapper, MainCaption, UnderCaption, FirstLayerHolder, LayerPic, SecondLayerHolder, SecondLayerCaption };
