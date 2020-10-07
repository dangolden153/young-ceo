import React,{useRef, useEffect} from 'react';
import {TweenLite} from 'gsap'

import Footer from '../../component/footer/footer.component';
import pics from '../../component/pictures/case3.jpg';
import {Sec_container,Container,Img,Backgroun_color,Text,Text_container,Text_span,Footer_con,Header,Span,
    Span_con,Text_header,Span_box}
 from './career.style';


const Career = ()=>{
    let backgroundRef = useRef(null);

    useEffect(()=>{
        TweenLite.to(backgroundRef,1.5,{
            height: '30vh',
            y: 450,
            delay: 1
        })
    })

    return (
    <Sec_container>

        <Container>

    <Header>
    <Img>
    <img src={pics} alt="header image"/>
    </Img>
    <Backgroun_color ref={el => (backgroundRef = el)}>
        <Text>
            <Span>career page</Span>
        </Text>
    </Backgroun_color>
    </Header>

    <Text_container>
        <Span_con>
            <Text_header>about the young ceo</Text_header>
        <Text_span>
Lorem ipsum dolor sit amet consectetur, adipisicing elit.
 Voluptate quae, quibusdam tenetur ex sit delectus alias 
 minima rerum enim, vero esse dolor consequatur et repellendus 
 voluptates itaque neque similique, quo quasi ipsa quam debitis nam 
 reprehenderit nisi? Magni doloribus excepturi quo suscipit, corrupti
  hic tenetur consequuntur. Vitae sed nostrum dolor ratione, quasi 
  doloremque reprehenderit distinctio ut aperiam odit exercitationem 
  soluta natus aliquam impedit modi. Libero nemo adipisci iusto quaerat
   pariatur molestiae itaque! Voluptatem autem perferendis dignissimos. 
   Placeat ab consectetur, esse veritatis cumque labore voluptatem quasi 
   adipisci tenetur quas dignissimos dolores accusantium 
rerum nemo aliquid dolor. Asperiores quos eos at ratione.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur 
eveniet ex eligendi quod esse, eum ratione asperiores sed officia unde 
dolor atque cum accusamus distinctio enim voluptas commodi autem itaque
 officiis ea mollitia iure qui saepe. Doloribus pariatur, temporibus esse, sunt
 fugiat iure suscipit libero eligendi similique laborum quibusdam atque?
        </Text_span>
        </Span_con>
    </Text_container>

      <Footer_con>  
    <Footer/>
    </Footer_con>

        </Container>

    </Sec_container>
)}

export default Career