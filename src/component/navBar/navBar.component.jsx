import React,{useState} from 'react'
import Nav_box from './nav-con/nav-con.component'
import Logo_Img from '../pictures/diamond-white.svg'
import nav_svg from '../pictures/nav.svg'
import close_svg from '../pictures/close.svg'

import {Navbar,Container,Logo_con,Text_con,Text,Text_Link,Logo_link,Logo,Img_con ,Img,Nav_con,Img_close,
    Img_close_con,Background} 
from './nacBar.styles'

const Nav_bar = ()=>{
    const [state, setState] = useState(true);

    const toggle =()=> setState(!state);


    return (
    <Navbar>
        <Container>
            <Logo_con>
               <Logo_link to='/'>
                   <Logo style={{
                       backgroundImage: `url(${Logo_Img})` 
                   }}>
                    </Logo>
            </Logo_link> 
            </Logo_con>

            <Text_con>
            <Text> <Text_Link to='/about-us' >About Us</Text_Link> </Text>
            <Text> <Text_Link to='/contact-us'>Contact</Text_Link> </Text>
            <Text> <Text_Link to='/'>Career</Text_Link> </Text>
            <Text> <Text_Link to='/privacy'>Privacy Policy</Text_Link> </Text>
           
      </Text_con>


    <Img_con   >
       { 
    state ? 
    <Img onClick={toggle} >
    <img src={nav_svg} alt="nav bar"/>
    { state ? null : <Nav_con><Nav_box/></Nav_con>}

    </Img>

     : 
     <Img_close_con>
     <Img_close onClick={toggle} >
     <img src={close_svg} alt="close bar"/> 
     </Img_close>
     <Nav_con><Nav_box/></Nav_con>

    </Img_close_con>
     
       }
    </Img_con>
      
        </Container>
    </Navbar>
)
}
export default Nav_bar