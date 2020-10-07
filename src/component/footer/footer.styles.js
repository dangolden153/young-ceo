import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Container  = styled.div`
height: 60vh;
display: flex;
flex-direction: column;
justify-content: space-between;
padding-top: 30px;
padding-left: 20px;
padding-right: 20px;
position: relative;
color: rgb(255,255,255);
background-color: #191b1d;
font-family: 'Roboto', sans-serif;

@media screen and (max-width: 780px){
    padding-left: 40px;
    padding-right: 40px;
}

@media screen and (max-width: 662px){
    padding-left: 20px;
    padding-right: 20px;
    height: 100vh;

        }
`



export const Up_con = styled.div`
height: 50%;
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width: 734px){
    flex-direction: column;
}

@media screen and (max-width: 662px){
    height: unset;
    }

`
export const Left = styled.div`     
width: 50%;
text-align: center;
letter-spacing: 1px;
align-self: flex-end;

@media screen and (max-width: 780px){
    flex: 1;
    align-self: center;

}
@media screen and (max-width: 734px){
    width: 100%;
    }

    @media screen and (max-width: 662px){
        height: 71%;
        }
`
export const Text = styled.h3`
font-size: 35px;
text-align: left;
text-transform: uppercase;

@media screen and (max-width: 780px){
    font-size: 28px;
    transform: unset;

}

@media screen and (max-width: 734px){
    text-align: center;


}
`
export const Right = styled.div`
display: grid;
grid-template-rows: repeat(2, 150px);
grid-template-columns: repeat(2, 200px);
margin-right: 89px;
padding-top: 70px;

@media screen and (max-width: 780px){
width: 68%;
grid-template-rows: repeat(2,131px);
grid-template-columns: repeat(2,194px);
}


@media screen and (max-width: 734px){
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: unset;

}

@media screen and (max-width: 662px){
    flex-direction: column;
    margin: 0 auto;
        }
`
export const List_con = styled.div`
justify-self: flex-start;
position: relative;

@media screen and (max-width: 662px){
align-self: center;
justify-self: center;
    }
`
export const Ul = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
align-items: flex-start;

@media screen and (max-width: 662px){
    align-items: center;
    padding: 0;
        }
`
export const Li = styled.li`
font-size: 15px;
line-height: 30px;

@media screen and (max-width: 780px){
font-size: 14px;
line-height: 27px;
}

@media screen and (max-width: 662px){
font-size: 13px;
line-height: 20px;
}
`
export const Telephone = styled.div`
justify-self: flex-start;

@media screen and (max-width: 662px){
    align-self: center;
        }
`
export const Address = styled.div`
width: 160px;
justify-self: flex-start;

@media screen and (max-width: 662px){
    align-self: center;
    font-size: 13px;
        }

`
export const Address_text = styled.p`

`
export const Down_con = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width: 662px){
    flex-direction: column;
        }
`
export const Text_link = styled(Link)`
text-decoration: none;
color: rgb(255,255,255);
`

export const Left_con = styled.div`
padding: 20px;
`
export const Right_con = styled.div`
padding: 20px;

@media screen and (max-width: 662px){
display: flex;
justify-content: space-around;
width: 100%;
    }
`
export const Svg_link = styled(Link)`
text-decoration: none;
color: rgb(255,255,255);
margin: 20px;

&::after{
    content: '';
    display: inline-block;
    background-color: rgb(255,255,255);
    height: 40px;
    width: 1px;
    margin-left: 20px;
    transform: translateY(6px);

}

@media screen and (max-width: 404px){
    &::after{
        display: none;
    }
        }
`
