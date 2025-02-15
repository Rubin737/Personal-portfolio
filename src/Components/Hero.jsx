import instagram from '../assets/nau.webp';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import pfp from '../assets/pfp.gif'

export const Hero = ()=>{
    return(
        
        <div id='home' className="flex w-screen md:flex-row flex-col-reverse md:justify-around p-5 items-center justify-center">
        <div className='w-full md:w-[50%]'>
            <p className='text-bold py-5'>WELCOME TO MY WORLD</p>
            <h1 className="text-3xl font-bold lg:text-4xl xl:text-6xl sm:min-w-[500px]">
                Hi, I’m <span className="gradient-text">Rubisten</span> a <span className="gradient-text">Frontend Developer</span>
            </h1>
            <p className=" pt-5 sm:text-xl text-base font-serif italic  ">“The only way to do great work is to love what you do”</p>
    
            <div className='flex flex-col w-40 gap-5 mt-10'>
                <p className='font-bold text-2xl  text-purple-400 '>Find Me</p>
                <div className='flex justify-between w-32 gap-5'>
                    <a href="https://www.linkedin.com/in/rubisten/" target="_blank"><img width={40} height={40} src={linkedin} alt="" className='button-logic' /></a>
                    <a href="https://www.naukri.com/mnjuser/profile" target="_blank"><img width={40} height={40} src={instagram} alt="" className='button-logic rounded-full' /></a>
                    <a href="https://github.com/Rubin737" target="_blank"><img width={40} height={40} src={github} alt="" className='button-logic'/></a>
                </div>
            </div>
        </div>
    
        <img className='w-full rounded-lg h-[250px] object-cover md:w-[200px] md:h-[200px] md:rounded-full lg:h-[350px] lg:w-[350px]'  
            src={pfp} 
            alt="" 
        />
    </div>
       )
}