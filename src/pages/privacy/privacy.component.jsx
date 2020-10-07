import React,{useRef, useEffect} from 'react';
import {TweenLite} from 'gsap'

import Footer from '../../component/footer/footer.component';
import Nav_bar from '../../component/navBar/navBar.component';

import pics from '../../component/pictures/privacy.jpg';
import {Sec_container,Container,Img,Backgroun_color,Text,Text_container,Text_span,Footer_con,Header,Span,
    Span_con,Text_header,Span_box}
 from './privacy.styles';


const Privacy = ()=>{
   
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
            <Text_header>  policy and privacy</Text_header>
        <Text_span>
        This Privacy Policy is designed to inform You about the Personal
  Data we collect, how we collect this data, the uses of the data and
  Your rights relating to the Personal Data when You use
        </Text_span>
        <Text_span>
        We are committed to protecting your Personal Data while You use this Website
        </Text_span>
        <Text_span>
        By continuing to use our Website, You acknowledge that You have
  reviewed the Privacy Policy and agree to its terms. This also means
  that You have consented to the
        </Text_span>
        <Text_span><strong>the personal data we collect from you </strong></Text_span>
        <Text_span>
        We collect various information to enable us provide good Service
  to all our users. Depending on how our Service will be used, 
  
  the different types of Personal Data we collect are as follows: 
  use of Your Personal Data and has accepted the applicable disclosures.
  this Service or purchase the Products offered on the Website.
        </Text_span>

        <Text_span>
            <strong> for registered users: During the process of Your registration we may collect the following information:</strong>
        </Text_span>
        <Text_span>
        we may also require informations in relation to 
</Text_span>
        <Text_span>(I) your interaction with our representatives
</Text_span>
        <Text_span>(II) the purchase you make</Text_span>
        <Text_span>
       <strong> for unregistered users:</strong> We will collect passive information from all registered and unregistered users. 
These information include cookies, 
IP address information, location information and certain browser information. 
        </Text_span>
        <Text_span> <strong> THE PERSONAL DATA WE COLLECT AS YOU USE OUR SERVICE</strong></Text_span>
        <Text_span>We use the following to collect Personal Data from You</Text_span>
        <Text_span> <strong> cookies :</strong> We use the data collected by the cookies to offer You
 the best experience on our Website. Cookies are information stored on 
 Your browser when You visit our Website or use a social network with Your
 PC, Smartphone or Tablets. They contain various data which includes the 
 name of the server from which it comes, the numeric 
 </Text_span>

 <Text_span> <strong>STORAGE OF PERSONAL DATA</strong> </Text_span>
 <Text_span>
 We take the security of the Personal Data we collect very
 seriously and we take reasonable measures to reduce the risk 
 of accidental destruction, loss or unauthorized access to such 
 information. However, please note that no system involving the transmission of information via
  electronic storage systems or the internet is completely secure.
identifier, etc.
 </Text_span>
 <Text_span>
 The Personal Data and any other information we have about You may be stored for such period as
 we may determine until You terminate Your account with us or You withdraw Your consent.
 </Text_span>

 <Text_span>Note that You can withdraw Your consent to store Your Personal Data at anytime. Once this is done, 
 all Personal Data and information we have about You will be deleted.</Text_span>


        </Span_con>
        
    </Text_container>

      <Footer_con>  
    <Footer/>
    </Footer_con>

        </Container>

    </Sec_container>
)}

export default Privacy