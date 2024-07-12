import React from 'react';
import styled from "styled-components";
import {Menu} from "../menu/Menu";

//https://youtu.be/JAwGp7x3DEk?si=L7choV1C0zhW8G_S&t=696 11:36
export const DesktopMenu: React.FC<{ menuItems: Array<string>; }> = (props: { menuItems: Array<string> }) => {
    return (
        <StyledDesktopMenu>
            <Menu menuItems={props.menuItems}/>
        </StyledDesktopMenu>
    );
};

const StyledDesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
    
`