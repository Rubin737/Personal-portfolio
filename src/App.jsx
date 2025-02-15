import { Hero } from "./Components/Hero";
import { NavBar } from "./Components/NavBar";
import { Projects } from "./Components/projects";
import { About } from "./Components/About";
import { Contact } from "./Components/Conract";

const App = ()=>{
  return(
    <main className="">
      <section>
        <NavBar/>
      </section>
      <section className="mt-24">
        <Hero/>
      </section>
      <section>
        <About/>
      </section>
      <section>
        <Projects/>
      </section>
       <section>
        <Contact/>
       </section>
  
      
    </main>
  )
}

export default App;
