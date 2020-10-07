import React,{useRef, useState , useEffect} from 'react'
import Video from '../video/backVideo.mp4'
import {TweenLite, Power3, TimelineLite} from 'gsap'
import CSSRuleplugin from 'gsap/CSSRulePlugin'
import CssRulePlugin from 'gsap/CSSRulePlugin'
import Nav_bar from '../navBar/navBar.component'

import './header.styles.scss'

const Header =()=>{ 

   // let navTransition = useRef(null);
    let textTransition = useRef(null);
    let videoContainer = useRef(null);
    let headertrans = useRef(null);
    
    let vidReveal = CSSRuleplugin.getRule(".Header_vid::after")


    let tl = new TimelineLite()


    useEffect(()=>{
       tl.to(videoContainer, 1.5, {opacity:1,delay:4 })
        tl.to(vidReveal, 2, {
            width:"0%",
            ease: Power3.easeInOut,
            delay:1

        })
       
   console.log(headertrans)
        TweenLite.to(headertrans, 1.5, {
            opacity:1,
            ease:Power3.easeIn,
            delay:1,

        })

        TweenLite.to(textTransition.children[0],1,{
            y:-30,
            delay:2,
            opacity:1,
            ease: Power3.easeInOut
        })
        TweenLite.to(textTransition.children[1],1,{
            y:-30,
            delay:3,
            opacity:1,
            ease: Power3.easeInOut

        })
        TweenLite.to(textTransition.children[2],1,{
            y:-30,
            delay:4,
            opacity:1,
            ease: Power3.easeInOut

        })

        
    },[])

    return(
        <div className="header">
            <div className="nav"><Nav_bar/> </div>
            <div ref={el => {videoContainer = el}} className="header-container">

        <div  
        className="Header_vid">
        <video muted loop autoPlay >
            <source src={Video} type='video/mp4'/>
        </video>       
         </div>
        </div>
            <div  className="header-con" >
                <h2 ref={el => {headertrans = el}} className="header-sub">let your <span>light shine</span></h2>
                <h3 ref={el => {textTransition = el}} className="heading-text">
                    <span>the</span>
                    <span>young</span>
                    <span>ceo</span>

                </h3>
                
            </div>


          
        </div>
    )
}

export default Header;