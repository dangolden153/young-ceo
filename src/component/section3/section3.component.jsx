import React,{useEffect, useRef, useState} from 'react' 
import CSSRuleplugin from 'gsap/CSSRulePlugin'
import rghtArrow from '../pictures/right-direction.svg'
import leftArrow from '../pictures/left-direction.svg'
import Leaf from "../pictures/green-tea.svg"
import {TweenLite, Power3} from 'gsap'
import {} from 'gsap/ScrollTrigger'

import './section3.scss'


const imgList = [
    {
        quote:'Its all good, i was amazed by the quallity of the job, we have seen an amazing result',
      //  title:'grindr director',
        name:'Richard Taiwo',
        id:1,
        image: `${require('../pictures/test-1.jpg')}`
    },
    {
        quote:'I have enjoyed working with the young ceo. I can proudly say this is my first and best move. Work environment is good. ',
       // title:'grindr & Cashapp Manager',
        name:'Oketola James',
        id:2,
        image: `${require('../pictures/test-2.jpg')}`
    },
    {
        quote:'The service was excellent. Absolutly wonderful!, the redesign did it all',
        //title:'tech lead GOlden',
        name:' Ayolari Bukola',
        id:3,
        image: `${require('../pictures/test-3.jpg')}`
    },
]











const Section3 =()=>{
      let imageList = useRef(null)        
      let textList = useRef(null)        
      let leafRef = useRef(null)        
      
      const imageWidth = 310;
    const slideLeft =(index,duration, multiplied=1)=>{
        TweenLite.to(imageList.children[index],duration,{
            x : -imageWidth *multiplied,
            ease: Power3.easeOut
        })
    }

    const slideright =(index,duration, multiplied=1)=>{
        TweenLite.to(imageList.children[index],duration,{
            x : imageWidth *multiplied,
            ease: Power3.easeOut
        })
    }

    const scale =(index,duration)=>{
        TweenLite.from(imageList.children[index], duration, {
            scale: 1.2,
            ease: Power3.easeOut

        })}

        const fadeOut =(index,duration)=>{
            TweenLite.to(textList.children[index], duration, {
                opacity: 0,
                ease: Power3.easeOut
             })
        }

        const fadeIn =(index,duration)=>{
            TweenLite.to(textList.children[index], duration, {
                opacity: 1,
                delay:1,
                ease: Power3.easeOut
             })
        }

        const prevSlide =()=>{
            if (imageList.children[0].classList.contains('Active')){
                setState({isActive1:false, isActive3: true});
                slideLeft(2,0,3)
                slideLeft(2,1,2)
                fadeOut(0,1)
                fadeIn(2,1)
                scale(2,1)
                slideright(0,1)
                slideright(1,1)


             } else if (imageList.children[1].classList.contains('Active')){
              setState({isActive2:false, isActive1: true})
              slideLeft(0,0)
              slideright(0,1,0)
              slideright(1,1,0)
              slideright(2,1,2)
              scale(0,1)
              fadeOut(1,1)
              fadeIn(0,1)

          }  else if (imageList.children[2].classList.contains('Active')){
              setState({isActive2:true, isActive3: false})
              slideLeft(2,1)
              slideLeft(1,0,2)
              slideLeft(1,1)
              fadeOut(2,1)
              fadeIn(1,1)
              scale(1,1)
              slideright(0,1,0)
  
          }
        }

      const nextSlide =()=>{
          if (imageList.children[0].classList.contains('Active')){
              setState({isActive1:false, isActive2: true});
            
              slideLeft(0,1)
              slideLeft(1,1)
              slideLeft(2,1)
              slideLeft(2,0,0)
              scale(1,1)
              fadeOut(0,1)
              fadeIn(1,1)



          } else if (imageList.children[1].classList.contains('Active')){
            setState({isActive2:false, isActive3: true})
            slideright(0,1)
            slideLeft(1,1,2)
            slideLeft(2,1,2)
            scale(2,1)
            fadeOut(1,1)
            fadeIn(2,1)

        }  else if (imageList.children[2].classList.contains('Active')){
            setState({isActive1:true, isActive3: false})
            slideLeft(2,1,3)
            slideLeft(0,1,0)
            slideLeft(1,0,0)
            scale(0,1)
            fadeOut(2,1)
            fadeIn(0,1)

        }
      }
      const [state, setState] = useState({
          isActive1:true,
          isActive2: false,
          isActive3:false
      })
      useEffect(()=>{
    TweenLite.to(textList.children[0], 0,{
        opacity: 1
    })    
    
    TweenLite.to(leafRef, 1,{
        opacity: 1,
        y: -30,
    }) 
    
}, [])
   
        return(
            
             <div className= 'sec-Container'>
             <div className="content">
         

         <div className="arrow-container"> 
         <div className="arrow-left">
                <div  onClick={prevSlide} className="left">
            <img src={leftArrow} alt="left arrow"/>
             </div>
             </div>
              
               

             
               
             

             <div className="img-con">
                 <div className="img-box">                
                  <ul ref={el => (imageList = el)}>
                    
                 <li className={state.isActive1? 'Active' : '' }>
                     <img src= {imgList[0].image}  alt="pics" className="img"/>
                     </li>
                 <li className={state.isActive2? 'Active' : '' }> 
                      <img src= {imgList[1].image}  alt="pics" className="img"/>
                 </li>
                 <li className={state.isActive3? 'Active' : '' }> 
                     <img src= {imgList[2].image}  alt="pics" className="img"/> 
                </li>

                    
                 </ul>
                 </div>

             </div>
        
            <div className="text-con">
                <ul ref={el => (textList = el)}>
                    
                <li className={state.isActive1? 'Active' : '' }>
                
                <div className="quote">{imgList[0].quote}</div>
                <h3 className="name">{imgList[0].title}</h3>
                <h4 className="title">{imgList[0].name}</h4>
                    </li>

                    <li className={state.isActive2? 'Active' : '' }>
                    <div className="quote">{imgList[1].quote}</div>
                <h3 className="name">{imgList[1].title}</h3>
                <h4 className="title">{imgList[1].name}</h4>
                </li>

                <li className={state.isActive3? 'Active' : '' }>
                <div className="quote">{imgList[2].quote}</div>
                <h3 className="name">{imgList[2].title}</h3>
                <h4 className="title">{imgList[2].name}</h4>
                </li>

                </ul>
               

                
        
            </div> 
        
            
            
            <div  className="arrow-right">
             <div className="right" onClick={nextSlide}>
                <img src={rghtArrow} alt="right arrow"/>
             </div>
             </div>
             
            </div>
             
             </div>
             
            <div ref={el => (leafRef = el)}
            className="img-container">
                <img src={Leaf} alt="green leaf"/>
            </div>

            </div>
        
        )
    }
   


export default  Section3;