/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Header from '../../layouts/header/Header';
import {
  MainPage, 
  MainContent, 
  CaptionWrapper, 
  MainCaption, 
  UnderCaption, 
  FirstLayerHolder, 
  LayerPic, 
  SecondLayerHolder,
  SecondLayerCaption
} from './MainStyles';
import mountains from '../../assets/images/mountains.png';
import mountains_bottom from '../../assets/images/mountains-bottom.png';
import 'animate.css/animate.min.css';

const Main = () => {
  useEffect(() => {
    document.title = 'Main - AppSolved';
  }, []);
  return (
    <MainPage>
        <Header />
        <MainContent>
        <FirstLayerHolder>
          <CaptionWrapper>
              <MainCaption>
                  BUILD YOUR OWN BRAND.
              </MainCaption>
              <UnderCaption>WRITE YOUR OWN HISTORY.</UnderCaption>
          </CaptionWrapper >
        </FirstLayerHolder>
        <LayerPic src={mountains_bottom} alt='mountains'/>
        <SecondLayerHolder>
          <SecondLayerCaption>
            WE PROVIDE:
          </SecondLayerCaption>
        </SecondLayerHolder>
        </MainContent>
    </MainPage>
  );
};

export default Main;
