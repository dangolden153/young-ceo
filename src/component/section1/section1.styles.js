import styled from 'styled-components'



export const Container = styled.div`
padding: 80px 50px;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 780px){
flex-direction: column;
}

`
export const Con = styled.div`
flex: 1;
`
export const Background = styled.div `
width: 424px;
height: 323px;
margin: 0 auto;
box-shadow: 11px 20px 34px rgba(0,0,10,0.6);
border-radius: 2px;

@media screen and (max-width: 780px){

width: 348px;
height: 294px;
}
`

export const Text_con = styled.div`
width: 52%;
margin: 0 auto;

@media screen and (max-width: 780px){
    width: 59%;
}
`
export const Header = styled.h3`
font-size: 20px;
line-height: 24px;
margin-bottom: 15px;
text-transform: uppercase;
padding-top: 30px;

@media screen and (max-width: 780px){
    font-size: 19px;
    line-height: 17px;
}
`
export const Text = styled.div`
font-size: 15px;
line-height: 42px;
font-family: 'Roboto', sans-serif;

@media screen and (max-width: 780px){
    font-size: 14px;
    line-height: 38px;
}
`
export const Img_con = styled.div`
padding: 15px;
flex: 1;

`
export const Img = styled.div`
height: 504px;
width: 487px;;
background-size: cover;
background-position: center;
display: flex;
align-items: end;
justify-content: flex-end;
margin: 0 auto;
border-radius: 2px;

@media screen and (max-width: 780px){
    height: 421px;
    width: 551px;
}

`
export const Img_text = styled.div`
font-size: 16px;
line-height: 26px;
align-self: flex-end;
color: rgb(255,255,255);
padding: 20px;
font-family: 'Roboto', sans-serif;

@media screen and (max-width: 520px){
    padding-right: 62px;}

@media screen and (max-width: 432px){
        padding-right: 91px;}

@media screen and (max-width: 375px){
    padding-right: 118px;}


`
