
import React,{useRef, useEffect} from 'react';
import {TweenLite} from 'gsap'

import Footer from '../../component/footer/footer.component';
import Nav_bar from '../../component/navBar/navBar.component';
import pics from '../../component/pictures/case3.jpg';
import Map from '../../component/contact-body/contact-body'
import {Sec_container,Container,Img,Backgroun_color,Text,Text_container,Text_span,Footer_con,Header,Span,
    Span_con,Text_header,Head_text,Flex_box,Box,Box_text,Sub_text,Background_text,Sub_text_link,Nav}
 from './contact.style';


const Contact = ()=>{
    let backgroundRef = useRef(null);
    let textRef = useRef(null);
    
    useEffect(()=>{
        TweenLite.to(backgroundRef,1.5,{
            height: '30vh',
            y: 450,
            delay: 1
        })

        TweenLite.to(textRef,1.5,{
            y:-80,
            delay: 3,
            opacity: 1
        })
    })

    return (
    <Sec_container>

        <Container>

    <Header>

    <Img>
    <Nav_bar/>

    <img src={pics} alt="header image"/>
    <Backgroun_color ref={el => (backgroundRef = el)}>
        <Background_text ref={el => (textRef = el)}>
            <Head_text>Contact Us</Head_text>
            <Flex_box>
                <Box>
                    <Box_text>
                    call us 
                    </Box_text>
                    <Sub_text>
                    08060200488
                    </Sub_text>
                    </Box>

                    <Box>
                    <Box_text>
                      write to us  
                    </Box_text>
                    <Sub_text_link>
                    youngceoglobalresources@gmail.con
                    </Sub_text_link>
                    </Box>

                    <Box>
                    <Box_text>
                     visit us    
                    </Box_text>
                    <Sub_text>
                  1, Aduralere crescent, Agbowa Ikorodu, Lagos State
                    </Sub_text>
                    </Box>

                    <Box>
                    <Box_text>
                     feature us    
                    </Box_text>
                    <Sub_text_link to="/">
                    youngceo.com
                    </Sub_text_link>
                </Box>
            </Flex_box>
        </Background_text>
    </Backgroun_color>
    </Img>
    
    </Header>

 
        <Map/>
        
      <Footer_con>  
    <Footer/>
    </Footer_con>

        </Container>

    </Sec_container>
)}

export default Contact