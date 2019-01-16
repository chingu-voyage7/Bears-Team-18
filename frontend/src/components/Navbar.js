import React from "react";
import {
    TopAppBar,
    TopAppBarRow,
    TopAppBarNavigationIcon,
    TopAppBarSection,
    TopAppBarTitle
} from "@rmwc/top-app-bar";
import "@material/top-app-bar/dist/mdc.top-app-bar.css";
import Icon from "./Icon";
import styled from 'styled-components'


const Title = styled(TopAppBarTitle)`
    font-size: 30px;
    font-family: "Righteous", cursive;
`;

const Navbar = props => (
    <TopAppBar fixed>
        <TopAppBarRow>
            <TopAppBarSection alignStart>
                <TopAppBarNavigationIcon>
                    <Icon svgWidth="50px" />
                </TopAppBarNavigationIcon>
                <Title>Huty's Hunt</Title>
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
                Join
            </TopAppBarSection>
        </TopAppBarRow>
    </TopAppBar>
);

export default Navbar;
