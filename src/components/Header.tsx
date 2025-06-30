import React from 'react';
import logo from '../img/logo.png';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Logo = styled.img`
    width: 200px;
    margin: 0 auto;
    display: flex;
    padding-top: 50px;
`;

const Menu = styled.ul`
    width: 100%;
    display: inline-block;
    text-align: center;
    margin: 0 auto;
    padding-top: 20px;
`;

const MenuItem = styled.li`
    display: inline;
    font-family: 'Song Myung';
    font-size: 1.6vw;
    margin-inline: 10px;

    .active {
        color: yellow;
    }
`;

const Header = () => {
    return (
        <div>
            <Logo src={logo} />

            <Menu>
                <MenuItem> <NavLink to="/date" activeClassName="active">별자리날짜 </NavLink> </MenuItem>
                <MenuItem> <NavLink to="/personality"> 별자리성격 </NavLink> </MenuItem>
                <MenuItem> <NavLink to="/chemistry">  별자리궁합 </NavLink> </MenuItem>
                <MenuItem> <NavLink to="/fortune"> 별자리운세 </NavLink> </MenuItem>
            </Menu>
        </div>
    )
}

export default Header;