import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="photo-computer.jpg" alt="cars" />;
}

function Intro() {
  return (
    <div>
      <h1>Nikolay Yanakiev</h1>
      <p>
        Front-end developer. I am Mechanical engineer and teacher of mathematics
        and informatics. I like to travel and spend time in nature.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="👌" />
      <Skill skill="Html+Css" emoji="👌" />
      <Skill skill="Js" emoji="🎆" />
      <Skill skill="Git + GitHub" emoji="🎆" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill">
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
