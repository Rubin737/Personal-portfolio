import { project } from "./util"
export const Projects = ()=>{
    return(
        <div id="projects" className="text-center mt-10 lg:ml-24 lg:mr-24 ml-5 mr-5 ">
            <h1 className="only-heading heading mb-10">My Projects</h1>
        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:place-items-center">
              
            {
                project.map(item=>{
                    return(
                        <div key={item.name} className="p-4 rounded-xl cursor-pointer transition duration-500 hover:scale-105 hover:border-2 box-shadow">
                           <img src={item.img} className="rounded-2xl w-full h-[150px] lg:h-[200px] lg:w-[250px] object-cover" alt="" />
                           <div className="mt-5 flex flex-col">
                           <h1 className="text-xl">{item.name}</h1>
                           <h1 className="text-gray-300">Using {item.tools}</h1>
                            <div className="flex  justify-center items-center gap-1 transition duration-500 hover:scale-105">
                            <a href={item.link} target="_blank"><h1 className="text-cyan-400">View Project</h1></a>
                                <img src={item.icon} width={15} alt="" />
                             </div>
                           </div>
                        </div>
                    )
                })
            }
        </section>
        </div>
    )
}
