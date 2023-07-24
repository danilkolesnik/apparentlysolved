import React, { useState } from 'react';
import { SwitcherWrapper, SwitcherContainer, SwitcherIndicator, SwitcherArrow, SwitcherMenu, SwitcherLanguage } from './SwitcherStyles';
import arrow from '../../assets/icons/arrow_switcher.svg';

const Switcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('En');

  return (
        <SwitcherWrapper>
            <SwitcherContainer onClick={() => setIsOpen(!isOpen)}>
                <SwitcherIndicator>{selectedLanguage}</SwitcherIndicator>
                <SwitcherArrow src={arrow} alt='arrow' isOpen={isOpen}/>
            </SwitcherContainer>
            {isOpen
              ? (
                  <SwitcherMenu>
                    <SwitcherLanguage onClick={() => {
                      setIsOpen(false);
                      setSelectedLanguage('En');
                    }}>
                        English
                    </SwitcherLanguage>
                    <SwitcherLanguage onClick={() => {
                      setIsOpen(false);
                      setSelectedLanguage('Укр');
                    }}>
                        Українська
                    </SwitcherLanguage>
                  </SwitcherMenu>
                )
              : ''}
        </SwitcherWrapper>
  );
};

export default Switcher;
