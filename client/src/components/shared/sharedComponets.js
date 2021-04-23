import styled from 'styled-components';
import {Menu, Header, Grid } from 'semantic-ui-react';
import Image from './images/Percent.png'

export const HomeHead = styled.h2`
    color: pink;
    align: right;
    text-align: left;
    margain-left 30;
    margain-right 50;
    font-size: 50px;

` 
export const SecMenu = styled(Menu)`
    background: pink !Important;
    color: white !Important;
`

export const MainHead = styled.h2`
    color: pink;
    font-size: 25 px;

`
export const Griddy = styled(Grid)`
    align-component: center;
    width: 100%
`
export const Percent = styled(Image)`
    align: center;
`
