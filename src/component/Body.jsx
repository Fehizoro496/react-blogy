import React, { Component } from 'react'
import { Iconly } from 'react-iconly'

function Image({path}){
    return(<img src={path} alt='tsy mety' className=''/>)
}

function Footer(){
    // return(
    //     <div className='text-center py-10 text-gray-300'>
    //         <div className='inline-flex'>
    //             <Iconly name="Message" classname="text-gray-400" set="bold"/>fehizoroandriantsarafara@gmail.com <br/>
    //         </div>
    //     </div>
    // )

    
    return (
        <footer className="py-12 space-y-4 text-center">
            <h6 className="text-gray-300 font-medium">ANDRIANTSARAFARA Fehizoro</h6>
            <p className="text-gray-300 font-medium">IGGLIA3</p>
            <p className="inline-flex text-gray-300 font-medium"><Iconly name="Message" classname="text-gray-400" set="bold"/> fehizoroandriantsarafara@gmail.com</p>
        </footer>
    )
}

function Dash(){
    return(
        <div className='flex px-32 items-center py-16 space-x-10'>            
            <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="000" className='flex-1 space-y-4'>
                <p className='font-medium text-6xl text-gray-200 text-right max-w-lg'>MUSIC'ALL</p>
                <p className='text-gray-400 font-medium max-w-lg text-right'>
                MUSIQUE, INSTRUMENTS, CHANSONS! <br />
                LE BLOG 100% MUSIQUE – HUMEURS MUSICALES
                </p>
            </div>
            <div 
                data-aos-anchor-placement="bottom-bottom" 
                data-aos="fade-left" 
                data-aos-duration="800" 
                data-aos-delay="0" 
                // className='flex-1 w-full bg-gray-100 opacity-75 h-500 '>
                className='flex-1 w-full h-auto'>
                    <img src="https://www.presse-citron.net/app/uploads/2019/03/myspace-musique.jpg" className="object-cover" />
            </div>
        </div>
    )
}

function Item({link,text,title}){
    return(
        <div data-aos="fade-up" data-aos-duration="500" data-aos-anchor-placement="center-bottom" className='flex-1 '>
            <div className='w-full h-150 mb-7'>
                <img src={link} className='object-cover'/>
            </div>
            <p className='text-gray-200 text-justify font-medium'>{title}</p>
            <p className='text-gray-700 text-justify font-normal'>{text}</p>
        </div>
    )
}

let t1='Entre cours particuliers, leçons en ligne ou en conservatoire, les opportunités pour apprendre le piano sont nombreuses. Avant de se lancer, ...'
let t2='Le début de l’été est toujours annonciateur de nouvelles sorties de sons et les rappeurs ne font pas l’exception. Cette semaine le prouve, ...'
let t3='Tweet D‘après une récente menée par OpinionWay, plus de 80 % des personnes ...'
function Items(){
    return(
        <div className='py-12 space-y-12'>
            <h1 className='text-center font-light text-gray-300 text-2xl'>Tous les articles</h1>
            <div className='flex space-x-10 px-32'>
                <Item link='https://www.blog-zik.com/wp-content/uploads/2021/06/mains-jouent-piano-yamaha-732x380.png' text={t1} title="Piano classique ou numérique : lequel choisir pour un débutant?"/>
                <Item link='https://www.blog-zik.com/wp-content/uploads/2021/06/micro-musique-732x380.png' text={t2} title="Les collabs rap de l’été : sur quels featuring miser?"/>
                <Item link='https://www.blog-zik.com/wp-content/uploads/2021/01/Musique-732x380.jpg' text={t3} title="Enquête : plus de 80 % des Français affirment que la musique leur permet de garder le moral"/>
            </div>
        </div>
    )
}

function Header(){
    return(
        <div className='flex place-content-between px-32 pt-7 items-center'>
            <div className=''>Music'All</div>
            {/* <button className='text-gray-300 border-gray-400 border-solid border-2 px-5 py-2 rounded-md uppercase'>Home</button> */}
            <Iconly name="Home" set="bold" className="text-gray-300"/>
        </div>
    )
}

export class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() { 
        return (
            <div className='bg-black text-gray-100'> 
                <Header/>
                <div className=''>
                    <Dash/>
                    <hr className='mx-20 opacity-10'/>
                    <Items/>
                </div>
                <hr className='mx-20 opacity-10'/>
                <Footer/>
            </div>
        );
    }
}