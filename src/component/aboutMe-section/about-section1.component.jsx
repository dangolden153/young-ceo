 import React from 'react'
import pics from '../pictures/abt-1.jpg'

import {Container,Text_img,Img_con,Img,Text_con,Header,Paragragh,Span_1,Span_2,Span_3} from './about-section1.styles'

const About_section1 =()=>{

    return(
        <Container>
                
                <Img_con>
                <Img>
                <img src={pics} alt="mission and vission"/>
                </Img>
                </Img_con>

            <Text_con>
                <Header>
                    <Span_1>here is to</Span_1> 
                    <Span_2>the innovator</Span_2>
                    <Span_3>the vissionaries</Span_3>
                    </Header>
                <Paragragh>
                The world is moved not only by the mighty shoves of the
             heroes, but also by the aggregate of the tiny pushes of each honest worker
                </Paragragh>
                <Paragragh>
            Be the change you want to see in the world.
                </Paragragh>
            </Text_con>
        </Container>
    )
}
    export default About_section1