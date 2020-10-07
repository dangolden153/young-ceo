import styled from 'styled-components'

export const  Container= styled.div `
z-index: 5;
font-family: 'Roboto', sans-serif;
font-style: normal;
transform: translateY(19px);
padding-top: 70px;

@media screen and (max-width: 800px){
    transform: unset;

}
`

export const  Img_text= styled.div `
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 705px){
    width: 100vw;

}

@media screen and (max-width: 500px){
    flex-direction: column;

}


`
export const  Img_box= styled.div `
width: 50%;
overflow: hidden;

@media screen and (max-width: 800px){
    width: 70%;

}

@media screen and (max-width: 500px){
    width: 100%;
}
`
export const  Img= styled.div `
width: 40rem;
height: 70rem;

img{
width: 100%;
height: 100%;
object-fit: cover;
}

@media screen and (max-width: 500px){
    width: 100%;
}
`
export const  Text_box= styled.div `
width: 50%; 

@media screen and (max-width: 500px){
    width: 80%;
}
`

export const  Box= styled.div `
width: 39%;
margin: 0 auto;

@media screen and (max-width: 800px){
    width: 77%;

}
`
export const  Header= styled.h3 `
font-size: 20px;
letter-spacing: .5px;
font-weight: 600;
text-transform: uppercase;
`

export const  Paragragh= styled.p `
font-size: 15px;
line-height: 34px;
font-weight: 400;

`