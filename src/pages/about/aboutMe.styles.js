import styled from 'styled-components'


export const Sec_container =styled.div`
width: 100vw;
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
padding-bottom: 100px;


@media screen and (max-width: 800px){
    padding-bottom: unset;
}
`

export const Img=styled.div`
height: 100%;
width: 100%;
background-position: center;
background-size: cover;
opacity: .9;

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
padding-top: 100px;
padding-bottom: 120px;
color: rgb(25,25,25);

@media screen and (max-width: 800px){
    padding-top: unset;
    padding-bottom: unset;
}
`

export const Span_con=styled.div`
margin: 0 auto;
background-color: rgb(238, 238, 238);

`

export const Text_header=styled.h2`
text-align: center;
font-size: 43px;
line-height: 45px;
text-transform: uppercase;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: 400px){
    font-size: 37px;
}
`

export const Span1=styled.span`
color: rgb(201, 200, 200);
`
export const Span2=styled.span`
color: rgb(99, 93, 96);
font-size: 38px;

`
export const Span3 =styled.span`
font-size: 30px;

`
export const Img_text=styled.div`
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 800px){
    flex-direction: column;
}
`

export const Img_box=styled.div`
width: 50%;

@media screen and (max-width: 800px){
    width: unset;
}
`

export const Img_con=styled.div`
height: 40rem;
width: 40rem;
overflow: hidden;
img{
height: 100%;
width: 100%;
object-fit: cover;
}


@media screen and (max-width: 800px){
    width: unset;
}
`
export const Header_text=styled.div`
width: 50%;

@media screen and (max-width: 800px){
    width: 72%;
}
`
export const Text_box=styled.div`
width: 61%;
margin: 0 auto;

@media  screen and (max-width: 800px){
    width: unset;
    padding: 80px 20px;
}

@media  screen and (max-width: 400px){
    padding: 80px 0px;
}
`

export const Text_span=styled.span`
font-size: 32px;
line-height: 37px;

`

export const Footer_con=styled.div`
height: 100%;
width: 100%;
`



