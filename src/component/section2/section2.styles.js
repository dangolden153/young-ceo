import styled from 'styled-components'


export const Container= styled.div `
padding: 80px 50px;
background-color: #191b1d;
font-family:'Roboto', sans-serif ;
font-weight: normal;
font-style:normal ;
position: relative;

@media screen and (max-width: 780px){
    padding: 30px 20px;

}
`
export const Img_container= styled.div `
display: grid;
grid-template-columns: repeat(2,550px);
grid-template-rows: repeat(5,937px);
justify-content: center;
grid-gap: 20px;
overflow: hidden;

@media screen and (max-width: 780px){
    grid-template-columns: repeat(2,323px);
    grid-template-rows: repeat(5,492px);
}

@media screen and (max-width: 688px){
    grid-gap: 4px;

}

@media screen and (max-width: 662px){
    grid-template-rows: repeat(10, 617px);
    grid-template-columns: unset;
    grid-gap: 50px;

}
`

export const Image_box= styled.div `

`

export const Section_header= styled.h3 `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-transform: uppercase;
letter-spacing: 1px;
font-size: 40px;
margin: 45px auto;
font-weight: 600;
color: rgb(225,225,225);
transition: opacity .3s ;
overflow:hidden;
width: 22%;

&:hover{
opacity: .7;  

}

@media screen and (max-width: 780px){
    font-size: 40px;
    width:unset;
}



`


export const Img= styled.div `
display: flex;
flex-direction: column ;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
border-radius: 2px;
background: white;
overflow: hidden;
position: relative;

&:hover{
opacity: .7;
    img{
        transform: scale(1.3);
    }
}

@media screen and (max-width: 662px){
    background: unset;

}
`
export const Box= styled.div `
height: 76%;
width: 100%;
overflow: hidden;
transition: transform 3s ease;
position: absolute;
top: 0;

img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: transform 2s ease;
    position-size: cover;
    background-position: center;

    @media screen and (max-width: 662px){
        object-fit: unset;
    }
}

@media screen and (max-width: 780px){
    height: 65%;
}

@media screen and (max-width: 662px){
    width: 479px;
    position: relative;
    top: -75px;
    height: 76%;

}

@media screen and (max-width: 380px){
    height: 67%;
    }

`



export const Text_container= styled.div `
width: 70%;
height: 21%; 
margin: 15px auto;
box-shadow: 10px 10px 45px rgba(0,0,10,0.4);
border-radius: 3px;
opacity: 1 !important ;
position: absolute;
bottom: 37px;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: center;

position: absolute;
bottom: 0;

@media screen and (max-width: 780px){
    width: 95%;
    height: 36%;
    margin: unset;
    box-shadow:unset;
    bottom: -18px;

}

@media screen and (max-width: 662px){
    height: 28%;
    color: rgb(225,225,225);
    box-shadow: unset;
}

@media screen and (max-width: 500px){
    height: 25%;
}
`
export const Header= styled.h3 `
text-transform: uppercase;
letter-spacing: .8px;
line-height: 10px;
font-size: 15px;
margin-top: 24px;

@media screen and (max-width: 780px){
    margin-top: 0px;
    line-height: unset;

}
`
export const Text= styled.p `
font-size: 15px;
line-height: 20px;
padding: 0 20px;
transform: translateY(-8px);

@media screen and (max-width: 780px){

font-size: 14px;
line-height: 17px;
padding: 0 20px;
}

@media screen and (max-width: 500px){
    width: 73%;
    }

    @media screen and (max-width: 500px){
        width: 73%;
        }

        @media screen and (max-width: 380px){
            width: 54%;
            }
`
