import React from "react";

import GameName from "../components/GameName";
import mage from "../resources/bgmaze.svg";
import { OuterContainer, Container } from "../components/styled-components"
import Navbar from "../components/Navbar";
//import PropTypes from 'prop-types';



class Home extends React.Component{
    render(){
        return (
            <div app="App">
                <Navbar />
                <OuterContainer>
                    <Container mage={mage}>
                        <GameName />
                    </Container>
                </OuterContainer>
            </div>
        );
    }
}

//Home.propTypes = {};

export default Home;
