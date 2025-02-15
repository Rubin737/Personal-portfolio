import AnchorLink from "react-anchor-link-smooth-scroll"
import logo from '../assets/icon.png'
import ham from '../assets/ham.png'
import { useState } from "react"
import deleteImg from '../assets/delete.png';


export const NavBar = ()=>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return(
        <header className="pt-5 pl-5 pr-5">
            <nav className="flex justify-between items-center cursor-pointer ">
                <img src={logo} alt="icon" width={40} height={40} className="object-center"/>
                 <ul className="justify-between items-center gap-10 hidden lg:flex text-lg">
                    <AnchorLink  offset={150}href="#home">Home</AnchorLink>
                    <AnchorLink offset={50} href="#about me">About Me</AnchorLink>
                    <AnchorLink href="#projects">Projects</AnchorLink>
                    <AnchorLink offset={-50} href="#contact">Contact</AnchorLink>
                 </ul>
                 <div className="flex item-center">
                 <AnchorLink href="#contact" offset={-50}><button className="text-lg gradient hidden lg:block px-4 py-2 font-outfit font-bold  rounded-full border-0 transition duration-500 hover:scale-105">Connect Now</button></AnchorLink>
                    <img src={isSidebarOpen ? deleteImg : ham} onClick={()=>{ setIsSidebarOpen(!isSidebarOpen)}}  alt="" width={30} height={30} className="object-cover lg:hidden" />
                 </div>
            </nav>
            <div
        className={`fixed top-0 right-0 h-full w-32 sm:w-64  bg-gray-800 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        
        <div className="p-4 flex justify-end">
          <img
            src={deleteImg}
            alt="Close"
            width={30}
            height={30}
            className="cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>

       
        <ul className="flex flex-col items-center gap-6 text-lg mt-10">
          <AnchorLink className="side-bar" offset={150} href="#home" onClick={() => setIsSidebarOpen(false)}>Home</AnchorLink>
          <AnchorLink className="side-bar" offset={50} href="#about me" onClick={() => setIsSidebarOpen(false)}>About Me</AnchorLink>
          <AnchorLink className="side-bar" href="#projects" onClick={() => setIsSidebarOpen(false)}>Projects</AnchorLink>
          <AnchorLink className="side-bar" offset={-50} href="#contact" onClick={() => setIsSidebarOpen(false)}>Contact</AnchorLink>
        </ul>
      </div>

        </header>
    )
}