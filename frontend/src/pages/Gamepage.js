import React from "react";
import ScrapGame from "../container/phaser-scrap"
import { OuterContainer, Container, Centerer } from "../components/styled-components";
//import PropTypes from 'prop-types';

const Gamepage = props => {
    return (
        <OuterContainer>
            <Container>
                <Centerer>
                    <ScrapGame />
                </Centerer>
            </Container>
        </OuterContainer>
    );
};

export default Gamepage