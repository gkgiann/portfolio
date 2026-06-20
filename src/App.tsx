import Experiences from "./components/experiences/Experiences";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import ProjectsList from "./components/projects/ProjectsList";
import SkillsList from "./components/skills/SkillsList";

function App() {
  return (
    <>
      <Header />
      <main className="px-6 md:px-12">
        <Home />
        <div className="max-w-5xl mx-auto">
          <Experiences />
          <SkillsList />
          <ProjectsList />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
