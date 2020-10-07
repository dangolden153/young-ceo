import styled from 'styled-components'


export const  Container= styled.div `
height: 184vh;
background: rgb(25,25,25);
margin-top: 150px;
position: relative;
top: 200px;
width: 100%;

@media screen and (max-width: 800px){
    top: unset;

}
`

export const  Text_img= styled.div `
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const  Img_con= styled.div `
height: 40%;
float: right;
transform: translateY(-218px);

@media screen and (max-width: 800px){
    transform: translateY(-159px);
    float: unset;

}
`

export const  Img= styled.div `
height: 30rem;
width: 44rem;

img{
height: 100%;
width: 100%;
object-fit: cover;
}

@media screen and (max-width: 705px){
    width: unset;
}
`

export const  Text_con= styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
color: rgb(255,255,255);
text-align: center;
width: 57%;
transform: translate(-50%,-50%);
position: absolute;
top: 53%;
left: 35%;



@media screen and (max-width: 600px){
    width: 70%;
    left: 40%;

}


@media screen and (max-width: 500px){
    top: 67%;
    left: 46%;
    width: 76%;
}

@media screen and (max-width: 355px){

left: 54%;
width: 88%;
}
`

export const  Header= styled.h4 `
display: flex;
flex-direction: column;
align-items: flex-start;
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-style: normal;
font-size: 35px;
line-height: 35px;
letter-spacing: 1px;
text-transform: uppercase;


@media screen and (max-width: 800px){
    color: #FF5753
}

@media screen and (max-width: 500px){
    font-size: 30px;
    line-height: 27px;
}

@media screen and (max-width: 500px){
    font-size: 27px;
    line-height: 27px;
}
`
export const  Span_1= styled.div `
color: rgb(225,225,225);
@media screen and (max-width: 800px){
    color: #FF5753
}
`
export const  Span_2= styled.div `
color: #FF5753

`
export const  Span_3= styled.div `
color: #FF5753
`
export const  Paragragh= styled.p `
display: flex;
flex-direction: column;
align-items: flex-start;
font-size: 35px;
line-height: 43px;
margin-top: 15px;
text-align: left;
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-style: normal;

@media screen and (max-width: 500px){
    font-size: 21px;
}

`