import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { DetailedSkills } from "./components/DetailedSkills";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { ReflectiveJournal } from "./components/ReflectiveJournal";
import { CareerPlan } from "./components/CareerPlan";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <DetailedSkills />
      <Education />
      <Experience />
      <Projects />
      <ReflectiveJournal />
      <CareerPlan />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
