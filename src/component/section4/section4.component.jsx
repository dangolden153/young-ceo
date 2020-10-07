import React,{useRef, useEffect} from 'react'
import {useIntersection} from 'react-use'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import './section4.styles.scss'
import {gsap, Power4} from 'gsap/gsap-core'

gsap.registerPlugin(ScrollTrigger)
const sections = [
    {
        title:'title',
        subtitle: 'subtile 1'
    },

    {
        title:'title',
        subtitle: 'subtile 1'
    },
    {
        title:'title',
        subtitle: 'subtile 1'
    },
    
]

const Section4 = ()=>{
 // let addBoxRef = useRef(null)
  let revealRef= useRef([])
  revealRef.current = []

  let revealBoxRef= useRef([])
  revealBoxRef.current =[]


useEffect(()=> {
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




    revealBoxRef.current.forEach((el, index) =>{
        gsap.fromTo(el,{
            autoAlpha:0
        },{
            duration:1,
            autoAlpha:1,
            y: -90,
            ease: Power4.easeInOut,
            scrollTrigger:{
                id: `section-${index+1}`,
                trigger: el,
                start: 'to center+=90',
                toggleActions: 'play none none reverse',
               // markers: true
            }
        })
    })
      
   
console.log(addBoxRef)
},[])
 


const addBoxRef = (element)=>{
    if (element && !revealBoxRef.current.includes(element)){
        revealBoxRef.current.push(element)
    }

    console.log(element)
}

const addToRef = (el)=>{
    if (el && !revealRef.current.includes(el)){
        revealRef.current.push(el)
    }

    console.log(el)
}

  return ( 
    
   <div className="section4">
 <div className="box-1" ref={addBoxRef}>
     <div  className="box-con">
     <p className="box-text">
         Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Dignissimos magni iure non consectetur reprehenderit quaerat
           esse laborum. Numquam nostrum, voluptatibus animi quae adipisci ab 
           deleniti cum atque vitae iusto, ea accusantium minus quidem quod molestiae 
           accusamus velit libero. Saepe, explicabo illo fugit aliquam corporis, eum, sunt
            voluptatibus porro ducimus facere qui aut eligendi quisquam. Molestiae aut dolores 
            laborum ad doloremque! Repellat, aperiam. Repellat velit a assumenda rem quia natus 
            sapiente facilis blanditiis dolores aliquam. Aliquam sint ad debitis quae, laborum
             dolores aperiam ut quia quaerat ducimus illo porro accusantium dolore illum rerum in iure
          aspernatur eligendi excepturi dignissimos velit maiores?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis nesciunt impedit ex. Omnis quia odit perferendis. Ratione ipsa dignissimos exercitationem earum et cumque sunt esse magni adipisci temporibus dolor voluptas, pariatur optio vero tempore ea consequuntur placeat nam recusandae, quos laboriosam, quis maxime? Nam sed consequatur reprehenderit quam eius repellat atque optio et officiis! Vel sequi porro sint nostrum, impedit numquam quaerat ut cum, libero dicta nisi! Possimus delectus libero ratione omnis! Atque illum eveniet cupiditate quae eos dolores vitae aliquid sequi, quasi animi provident adipisci consequatur! Ullam, itaque voluptatibus quis quod explicabo laudantium beatae quasi in fugit sapiente!
     </p>
     </div>
 </div>

<div  className="box2">
    <div  className="box2-con">
{ sections.map(({title, subtitle}) =>{

    return (
    <div ref={addToRef} key={title} className="flex-box">
        <h3 className="title">{title}</h3>
        <p className="subtitle">{subtitle}</p>
    </div>
    )
})

    }
    </div>
</div>


    </div>
    )
}

export default Section4;