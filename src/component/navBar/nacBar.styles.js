import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Navbar  = styled.div`
height: 70px;
width: 100%;
background: transparent;
z-index: 5000;
position: absolute;
top: 0;
left: 0;
`
export const Container  = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-right: 10px;
padding-left: 10px;


`
export const Logo_con  = styled.div`
padding: 10px;
padding: 21px;
padding-top: 30px;
width: 20%;
`
export const Logo_link  = styled(Link)`
text-decoration: none;
color: black
`

export const Logo  = styled.div`
height: 40px;
width: 40px;
background-position: center;
background-size: cover;

@media screen and (max-width: 780px){
height: 34px;
width: 34px;
}
`

export const Text_con  = styled.div`
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 590px){
    display: none;

}
`
export const Text  = styled.div`
font-size: 15px;
font-family:'Roboto', sans-serif ;
font-weight: 500;
font-style:normal ;
padding: 21px;
padding-top: 30px;

@media screen and (max-width: 780px){
    font-size: 14px;

}
`
export const Text_Link  = styled(Link)`
text-decoration: none;
color: white


`

 
export const Img_con  = styled.div`
margin-right: 27px;
position: reltive;
display: none;


@media screen and (max-width: 590px){
display: block;

}
`

export const Img  = styled.div`
height: 30px;
width: 30px;

img{
    height: 100%;
    width: 100%;
}

`

export const Img_close_con  = styled.div`

`


export const Img_close  = styled.div`
height: 17px;
width: 30px;
position: fixed;
right: 46px;
top: 46px;
z-index: 8000;
img{
    height: 100%;
    width: 100%;
}

`


export const Nav_con  = styled.div`
height: 100vh;
width: 100vw;
background: purple;
position: fixed;
right: 0;
top: 0;
overflow: hidden;
`



