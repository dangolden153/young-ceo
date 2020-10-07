import React,{useRef, useEffect} from 'react';
import {TweenLite} from 'gsap'

import Footer from '../../component/footer/footer.component';
import Nav_bar from '../../component/navBar/navBar.component';
import AboutMe_2 from './aboutMe-section2.conponent'
import About_section1 from '../../component/aboutMe-section/about-section1.component'

import pics from '../../component/pictures/about-us.jpg';
import img from '../../component/pictures/abt.jpg';

import {Sec_container,Container,Img,Backgroun_color,Text,Text_container,Text_span,Footer_con,Header,Span,
    Span_con,Text_header,Span_box,Span3,Span2,Span1,Img_text,Img_con,Header_text,Img_box,Text_box  }
 from './aboutMe.styles';


const About_us = ()=>{
  //  let backgroundRef = useRef(null);

    // useEffect(()=>{
    //     TweenLite.to(backgroundRef,1.5,{
    //         height: '30vh',
    //         y: 450,
    //         delay: 1
    //     })
    // })

    return (
    <Sec_container>

        <Container>

    <Header>
    <Img>
    <Nav_bar/>
    <img src={pics} alt="header image"/>
    </Img>
    
    </Header>

    <Text_container>
        <Span_con>
            

                <Img_text>
                <Img_box>
            <Img_con>
            <img src={img} alt="about the ceo"/>
            </Img_con>  
            </Img_box>

            <Header_text>
                <Text_box>
            <Text_header>
                <Span1>about the</Span1>
                <Span2>young</Span2> 
                <Span3>ceo</Span3> 
                </Text_header>
        <Text_span>
We give real service that add something which cannot be bought or
  measured with money, and that is sincerity and integrity.
        </Text_span>
        </Text_box>
        </Header_text>  
        </Img_text>
 
        </Span_con> 
    </Text_container>
    
    <About_section1/>
    <AboutMe_2/>

      <Footer_con>  
    <Footer/>
    </Footer_con>

        </Container>

    </Sec_container>
)}

export default About_us