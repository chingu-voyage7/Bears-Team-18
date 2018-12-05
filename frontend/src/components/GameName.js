import React from 'react'
import styled from 'styled-components'
import { Button, ButtonIcon } from "@rmwc/button";
import Icon from './Icon'
import "@material/button/dist/mdc.button.css";
import bgImage from "../resources/maze.svg"


const Container = styled.div`
    margin: 0 auto;
    padding-top: 200px;

`
const Title = styled.div`
    font-size: 180px;
    text-align: center;
    font-family: "Righteous", cursive;
    color: #fff;
    width: 550px;
    line-height: 140px;
    margin: 0 auto;
`;
const BtnContainer = styled.div`
    margin: 40px auto 0;
`
const Btn = styled(Button)`
    background-color: var(--mdc-theme-secondary) !important;
    color: #FFF !important;
`;

const Name = props => (
    <Container>
        <Title>Huty's<br />Hunt</Title>
        <BtnContainer>
            <Btn raised theme="on-secondary" accent>
                <ButtonIcon>
                    <Icon pathColor="#FFF" />
                </ButtonIcon>
                Play Now!
            </Btn>
        </BtnContainer>
    </Container>
);

export default Name