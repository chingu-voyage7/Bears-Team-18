import styled from 'styled-components'
import mage from "../../resources/bgmaze.svg";

export const OuterContainer = styled.div`
    display: block;
`;
export const Container = styled.div`
    height: 100vh;
    background: var(--mdc-theme-primary) url(${mage}) center / contain no-repeat;
`;
export const Centerer = styled.div`
    margin: 50px auto;
    width: 800px;
`
