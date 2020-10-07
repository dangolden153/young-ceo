import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Sec_container =styled.div`

`
export const Nav =styled.div`

`
export const Container=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Header=styled.div`
height: 100vh;
width: 100%;
position: relative;
display: flex;
flex-direction: column;
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
height: 100vh;
width: 100%;
position: absolute;
top: 10px;
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
padding: 90px 85px;
color: rgb(25,25,25);
`

export const Span_con=styled.div`
width: 70%;
margin: 0 auto;
`

export const Text_header=styled.h3`
text-align: center;
fontsize: 25px;
line-height: 30px;
text-transform: uppercase;
`

export const Text_span=styled.span`
font-size: 18px;
line-height: 28px;
`

export const Footer_con=styled.div`
height: 100%;
width: 100%;
`

export const Background_text=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
color: rgb(225,225,225);
position: absolute;
top: 100px;
opacity: 0;
`

export const Head_text=styled.h3`
font-size: 20px;
line-height: 25px;
align-items: center;
justify-content: center;
`
export const Flex_box=styled.div`
display: flex;
padding-left: 25px;
align-items: center;

`
export const Box=styled.div`
display: flex;
flex-direction: column;
padding: 25px;
align-items: center;
justify-content: center;



`

export const Box_text=styled.div`
font-size: 18px;
line-height: 25px;
opacity: .8;

`

export const Sub_text=styled.div`
font-size: 18px;
line-height: 25px;
`

export const Sub_text_link = styled(Link)`
font-size: 18px;
line-height: 25px;
text-decoration: none;
color: rgb(225,225,225);

`