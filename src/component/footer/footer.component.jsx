import React from 'react'

 import {ReactComponent as Facebook} from '../pictures/facebook.svg'
 import {ReactComponent as Twitter} from '../pictures/twitter-white.svg'
 import {ReactComponent as WhatsApp} from '../pictures/whatsapp.svg'
 import {ReactComponent as Instagram} from '../pictures/white-ig.svg'
// import {ReactComopoent as Youtube} from '../pictures/youtube-white.svg'

import {Container,Svg_con,Svg_link,Up_con,Left,Text,Right,List_con,Ul,Li,Telephone,Address,Address_text,
    Down_con,Left_con,Right_con,Text_link} from './footer.styles'


    
const Footer =()=> (
    <Container>

    <Up_con>
        <Left>
        <Text_link> 
        <Text>
            the young ceo
        </Text>
        </Text_link>
        </Left>
    
    <Right>
        <List_con>
            <Ul>
         <Text_link to='/about-us'>  <Li>About Us</Li>  </Text_link>
         <Text_link to='/contact-us'> <Li>Contact Us</Li>  </Text_link>
         <Text_link to='/'> <Li>Career</Li>  </Text_link>

            </Ul>
        </List_con>
        <Telephone>
        <Ul>
              <Li>Tel: +2348060200488</Li>  
              <Li>Fax: +2348022752060</Li>  
              <Text_link><Li>youngceoglobalresources@gmail.con</Li>  </Text_link>

            </Ul>
        </Telephone>

        <Address>
            <Address_text>
            1, Aduralere crescent, Agbowa Ikorodu, Lagos State

             </Address_text>
        </Address>
    </Right>
    </Up_con>

    <Down_con>
    <Left_con>
         <Text_link to='/privacy'>Policy and Privacy</Text_link>   
    </Left_con>
    <Right_con>
    <Svg_link><Facebook height='30px' width='30px'/></Svg_link>
    <Svg_link><Twitter height='30px' width='30px'/></Svg_link>
    <Svg_link><WhatsApp height='30px' width='30px'/></Svg_link>
    <Svg_link><Instagram height='30px' width='30px'/></Svg_link>

    
    </Right_con>
    </Down_con>


    </Container>
)

export default Footer