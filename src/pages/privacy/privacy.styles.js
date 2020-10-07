import styled from 'styled-components'


export const Sec_container =styled.div`

`

export const Container=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Header=styled.div`
height: 100vh;
position: relative;
`

export const Img=styled.div`
height: 100%;
width: 100%;
background-position: center;
background-size: cover;

img{
height: 100%;
width: 100%;
object-fit: cover;
background-position: center;
background-size: cover;
}
`

export const Backgroun_color=styled.div`
background: #39145d;;
height: 100%;
width: 100%;
position: absolute;
top: 9px;
display: flex;
align-items: flex-end;

`

export const Text=styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 50px 20px;
`

export const Span=styled.span`
font-size: 18px;
line-height: 20px;
color: white;
z-index: 500;
`

export const Text_container=styled.div`
padding: 90px 40px;
color: rgb(25,25,25);

@media screen and (max-width: 600px){
    padding: 90px 35px ;
}
@media screen and (max-width: 400px){
    padding: 90px 28px;
}
`

export const Span_con=styled.div`
width: 70%;
margin: 0 auto;
font-family: 'Roboto', sans-serif;

@media screen and (max-width: 600px){
    width: 100%;
}
`

export const Text_header=styled.h3`
text-align: center;
fontsize: 25px;
line-height: 30px;
text-transform: uppercase;
`

export const Text_span=styled.p`
font-size: 18px;
line-height: 28px;
margin-top: 15px;
margin-bottom: 15px;
text-align: left;
`

export const Footer_con=styled.div`
height: 100%;
width: 100%;
`

