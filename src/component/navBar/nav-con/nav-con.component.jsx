import React from 'react'

import {Container,Text_con,Text,Text_Link } from './nav-con.styles'

const Nav_box =()=>{
    
    
    return(
<Container>
<Text_con>
            <Text> <Text_Link to='/about-us' >About Us</Text_Link> </Text>
            <Text> <Text_Link to='/contact-us'>Contact</Text_Link> </Text>
            <Text> <Text_Link to='/privacy'>Privacy Policy</Text_Link> </Text>
           
      </Text_con>
</Container>

)
}

export default Nav_box