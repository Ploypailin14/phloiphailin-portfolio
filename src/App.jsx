import './App.css'
{/*components*/}
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'  
import ProjectCard from './components/ProjectCard'
{/*data*/}
import projects from './data/projects'

function App() {
  return (
    <>
    <Navbar/>

    {/*ส่ง props ไปยัง Hero component*/}
    <main>
      <Hero 
        name="Phloiphailin Khampuk"
        role="Front-end Developer"
      />

      <About/>
      <Skills/>

      <section id="projects" className="projects-section">
          <h1>My Projects</h1>
    
          {/*ส่ง props ไปยัง ProjectCard component*/}
          {/*ใช้ map function เพื่อวนลูปผ่าน array ของ projects.js และสร้าง ProjectCard สำหรับแต่ละ project*/}
          {/*React ต้องการ key เพื่อแยกแต่ละรายการในรายการที่เราสร้างด้วย .map()*/}
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tech={project.tech}
              />
            ))}
          </div>
        </section>
    </main>
    </>
  )
}

export default App
