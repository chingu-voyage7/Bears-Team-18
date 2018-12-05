import React from "react";
import styled from "styled-components";
import GameName from "../components/GameName";
import mage from "../resources/bgmaze.svg";
//import PropTypes from 'prop-types';

const OuterContainer = styled.div`
    display: block;
`;
const Container = styled.div`
    height: 100vh;
    background: var(--mdc-theme-primary) url(${mage}) center / contain no-repeat;
`;

const Home = props => {
    return (
        <OuterContainer>
            <Container>
                <GameName />
            </Container>
        </OuterContainer>
    );
};

//Home.propTypes = {};

export default Home;
