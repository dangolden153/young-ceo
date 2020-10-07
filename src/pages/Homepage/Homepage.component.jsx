import React from 'react'

import Section3 from '../../component/section3/section3.component'
import Section2 from '../../component/section2/section2.component'
import Header from '../../component/header/header.component'
import Section1 from '../../component/section1/section1.component'
import Section4 from '../../component/section4/section4.component'
import Footer from '../../component/footer/footer.component'

import {Container} from './Homepage.styles'

const Homepage =()=> (
    <Container>

    <Header/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Footer/>

    </Container>
)

export default Homepage