import React from 'react'
import picture from '../pictures/customer.jpg'
import {Container,Text_con,Header,Text,Img_con,Img,Img_text,Con,Background} from './section1.styles'

const Section1 =()=>{

    return(

        <Container>

<Img_con>
        <Img style={{
            backgroundImage: `url(${picture})`
        }}>
            <Img_text>
        We do our best to <br/> satisfy our customers
        </Img_text>
        </Img>
        
        </Img_con>
            <Con>
            <Background>   

         <Text_con> 
        <Header>mission & vission</Header>
        <Text>
    To provide products, services and solutions of the highest quality
    and deliver more value to our customers that earns their <strong>respect and loyalty.</strong>
        
         </Text>
        </Text_con>
        </Background>

        </Con>
        

        </Container>
    )
}

export default Section1