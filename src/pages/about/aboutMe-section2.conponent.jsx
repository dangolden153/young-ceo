import React from 'react'
import pics from '../../component/pictures/network7.jpg'
import {Container,Img_text,Img_box,Img,Text_box,Header,Paragragh,Box} from './aboutMe-section2.styles'

const AboutMe_2 = ()=>{

    return(
        <Container> 


            <Img_text>

            <Img_box>
            <Img>
            <img src={pics} alt=""/>
            </Img>
            </Img_box>

            <Text_box>
                <Box>
                <Header>to our customer </Header>
                <Paragragh>
  Our customer is the most important visitor on our premises, he is not
  dependent on us. We are dependent on him. He is not an interruption 
  in our work. He is the <i>purpose</i>  of it. He is not an outsider in our business.
  He is <strong>part</strong>  of it. We are not doing him a favor by serving him.
  He is doing us a favor by giving us an <i>opportunity</i>  to do so...
            </Paragragh>
            </Box>
            </Text_box>
            </Img_text>
             
        </Container>
    )
}

    export default AboutMe_2