import React,{useEffect, useRef} from 'react'
import Pics from '../pictures/case2.jpg'
import case3 from '../pictures/case3.jpg'
import case5 from '../pictures/case5.jpg'
import gsap from 'gsap/gsap-core'
import {ScrollTrigger} from 'gsap/ScrollTrigger'




 



import {Container,Img_container,Img,Text,Box,Text_container,Header,Section_header,BOx2, Image_box,
  Container_box,Span_1,Span_2} from './section2.styles'

gsap.registerPlugin(ScrollTrigger)

const sections =[ 
  {
    image:  `${require('../pictures/pexels-tour1.jpg')}`,
    header: 'Travels And Tours',
    pragraph: 'We are a receptive tour operator working with travel companies to provide ground services for groups throughout Europe. We focus on performing, educational and cultural tours for adult and student groups and ensure the booking of international trips is fun, creative and enriching for all ...'
  },
{
  image:  `${require('../pictures/estate4.jpg')}`,
  header: 'Real Estate & Property',
  pragraph: 'Our  responsibilities will vary based on the type of property being managed, the amount they are getting paid, and the terms of the management contract. There are some important roles a property manager can take on to assist rental property owners  ...'
},

{
image:  `${require('../pictures/clearing2.jpg')}`,
header: 'Clearing & Forwarding',
pragraph: 'Our company works with relevant authorities to ensure the forwarding or the release of imported goods. ... We are  specialised in getting imported goods from the Customs Authority at the destination ports...'
  },

{
image:  `${require('../pictures/car1.jpg')}`,
header: 'Car Dealer',
pragraph: 'We have sold several cars to our customer worldwide..come and see some reason why they continue to choose us....  '
  },

{
image:  `${require('../pictures/oil.jpg')}`,
header: 'Oil & Gas',
pragraph: 'Our ambition is to Become the responsible energy major. by delivering affordable, reliable and clean oil to as many people as possible...'
  },

  {
    image:  `${require('../pictures/media.jpg')}`,
    header: 'Entertainment',
    pragraph: 'We are a system of entertainment usually of electronic components that handle audio and video, video gaming, computers ...'
      },
    
      {
        image:  `${require('../pictures/network8.jpg')}`,
        header: 'Networking',
        pragraph: 'Networking is a socioeconomic business activity by which businesspeople and entrepreneurs meet to form business relationships and to recognize,so we create or   act upon business opportunities, share information and seek potential partners for ventures.        ...'
          },
        
          {
            image:  `${require('../pictures/company1.jpg')}`,
            header: 'Company Registration',
            pragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente consequatur vitae neque veritatis repudiandae voluptas.'
          },
            
              {
                image:  `${require('../pictures/cloth4.jpg')}`,
                header: 'Clothing',
                pragraph: 'we devote our time to acquiring fashionable items ...'
              },
                
              {
                image:  `${require('../pictures/water.jpg')}`,
                header: 'To our customers',
                pragraph: 'What do we live for if not to make life less difficult for each other ...'
              },
                          
]

const Section2 =()=> {

let revealRef = useRef([])
revealRef.current = []


useEffect(()=>{
  revealRef.current.forEach((el, index) =>{
    gsap.fromTo(el,{
        autoAlpha:0
    },{
        duration:1,
        autoAlpha:1,
        ease:'none',
        scrollTrigger:{
            id: `section-${index+1}`,
            trigger: el,
            start: 'to center+=100',
            toggleActions: 'play none none reverse',
           // markers: true
        }
    })
})

  
},[])


const addToRef =(el)=>{
if (el && !revealRef.current.includes(el)){
  revealRef.current.push(el)
}
  console.log(el)
}

return(
   <Container>
           <Section_header>
              what we do
             </Section_header>

    <Img_container >

{
sections.map(({image, header,pragraph,vid}) =>{

  return(

    <Image_box>
    <Img key={image}>
      <Box  ref={addToRef}>
     <img src= {image}  alt="pics" className="img"/>
     </Box>

    <Text_container>
    <Header>{header}</Header>
    <Text>{pragraph}</Text>  
   </Text_container>

    </Img>
    
    </Image_box>
  


  )
})
}
</Img_container>

   </Container>

)
    
}

export default Section2

