import styled from 'styled-components';
import {Menu, Header, Grid, Input, Icon, Button, Segment, Image,} from 'semantic-ui-react';

export const HomeHead = styled.h2`
    color: #fc8787;
`
export const SecMenu = styled(Menu)`
    background: #fc8787 !Important;
    color: white !Important;
`

export const MainHead = styled.h2`
    color: #fc8787;
    font-size: 25 px;

`
export const Griddy = styled(Grid)`
    align-component: center;
    width: 100%
`
export const Percent = styled(Image)`
    text-align: cente
    align: center;
    content-align: center;
`
export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`
export const ContainerGame = styled.div`
display: auto;
align-items: center;
justify-content: flex-start;
width: 100%;
`

export const ContainerSec = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const StyledInput = styled(Input)`
width: 550px;
color: #fc8787;
box-shadow: 2px 2px 5px grey;
`
export const SecInput = styled(Input)`
width: 600px;
input-color: #fc8787;
`


export const StyledIcon = styled(Icon)`
name: search;
color: #fc8787;
`
export const StyledButton = styled(Button)`
color: #fc8787;
`
export const SecBackground = styled.div`
backgroundImage: linearGradient()
position: fixed;
minWidth: 100%;
minHeight: 100%;
background-size: cover;
`