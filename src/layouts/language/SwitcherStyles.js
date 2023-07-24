import styled from 'styled-components';
import { font_cera, font_cera_bold } from '../../assets/style/fonts_variables';

const SwitcherWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer
`;

const SwitcherContainer = styled.div`
    display: flex;
    align-items: center;
    width: 70px;
    gap: 8px;
    cursor: pointer
`;

const SwitcherIndicator = styled.p`
    font-family: ${font_cera_bold};
    font-size: 19px;
`;

const SwitcherArrow = styled.img`
    width: 13px;
    margin-top: 4px;
    ${(props) => (props.isOpen ? 'transform: rotate(180deg)' : '')}
`;

const SwitcherMenu = styled.ul`
    position: absolute;
    margin-top: 105px;
    margin-left: -5px;
    gap: 6px;
    display: flex;
    flex-direction: column;
`;

const SwitcherLanguage = styled.li`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-family: ${font_cera};
    padding: 5px;
    &:hover {
        background-color: #EBEBF3;
        border-radius: 4px;
    }
`;

export { SwitcherContainer, SwitcherIndicator, SwitcherWrapper, SwitcherArrow, SwitcherMenu, SwitcherLanguage };
