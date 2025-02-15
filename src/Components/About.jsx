import gem from '../assets/gem.png'
import html from '../assets/skills/html.png';
import css from '../assets/skills/css.png';
import js from '../assets/skills/js.png';
import re from '../assets/skills/atom.png';
import git from '../assets/skills/git.png';
import tail from '../assets/skills/tw.png';
import cv from '../assets/cv.pdf';
import pencil from '../assets/pencil.png';
import nodejs from '../assets/skills/nodejs_col.png'

export const About = ()=>{
    return(
           <div id='about me'>
            <h1 className='only-heading heading mt-20 ml-5 mr-5 '>About Me</h1>
            <section className='mt-10 p-5 flex flex-col  lg:flex-row lg:flex-wrap md:mx-13 md:items-center  lg:justify-center '>
            <div className='flex flex-col gap-12  ml-0 md:ml-5 '>
              <div className='flex flex-col gap-5 about-shadow'>
                <h1 className='md:text-3xl text-2xl font-bold text-purple-400'>Education</h1>
                <div className='flex items-center gap-5'>
                  <img src={gem} width={25} className='object-cover' alt="gem icon" />
                  <p>2021-2024 - <span className='font-bold'>Bishop Heber College - <span className=' text-base text-emerald-400'>BCA</span></span></p>
                </div>
                <div className='flex items-center gap-5'>
                  <img src={gem} width={25} className='object-cover' alt="gem icon" />
                  <p>2020-2021 - <span className='font-bold'>St. Arulanandar Higher Secondary School</span></p>
                </div>
              </div>
          
              <div className='flex flex-col gap-5 about-shadow'>
                <h1 className='md:text-3xl text-2xl font-bold text-purple-400'>Certifications</h1>
                <div className='flex items-center gap-5'>
                  <img src={gem} width={25} alt="gem icon" />
                  <p>Frontend Developer Certificate - <span className='font-bold'>Login360</span></p>
                </div>
              </div>
            </div>
          
            <div className='flex flex-col gap-5 w-full lg:w-[50%] md:ml-10 md:mt-10'>
              <div className='about-shadow'>
                <h1 className='md:text-3xl text-2xl font-bold mb-5 mt-5 text-purple-400'>About</h1>
                <p className='text-base'>
                  Hi, I’m Rubin. I’m a web developer who loves coding and learning new technologies. I’m passionate about creating meaningful and user-friendly experiences. Every day is an opportunity to grow and improve, and I’m excited about the journey ahead!
                </p>
                <div className='flex gap-3 items-center mt-5'>
                <img src={pencil} width={30} height={30} alt="" className='object-contain rounded-md'/>
                <a href={cv} target='_blank'><p className=' text-xl text-cyan-400 underline italic font-serif tracking-wide cursor-pointer'>Resume</p></a>
                </div>
              </div>
          
              <div className='flex flex-col gap-5'>
                <h1 className='md:text-3xl text-2xl gradient- font-bold text-purple-400'>Skills</h1>
                <div className='flex flex-wrap gap-3 about-shadow'>
                  <div className='flex flex-col items-center gap-3'>
                    <img src={html} alt="HTML icon" />
                    <p>HTML</p>
                  </div>
                  <div className='flex flex-col items-center gap-3'>
                    <img src={css} alt="CSS icon" />
                    <p>CSS</p>
                  </div>
                  <div className='flex flex-col items-center gap-3'>
                    <img src={js} alt="JavaScript icon" />
                    <p>JavaScript</p>
                  </div>
                  <div className='flex flex-col items-center gap-3'>
                    <img src={re} alt="ReactJS icon" />
                    <p>ReactJS</p>
                  </div>
                  <div className='flex flex-col items-center gap-3'>
                    <img src={git} alt="TailwindCSS icon" />
                    <p>GitHub</p>
                  </div>
                  <div className='flex flex-col items-center gap-3'>
                    <img src={tail} alt="TailwindCSS icon" />
                    <p>TailwindCSS</p>
                  </div>
                  <div className='flex flex-col items-center gap-3'>
                    <img className='object-center' src={nodejs} alt="CSS icon" />
                    <p>NodeJS</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>
            )
}