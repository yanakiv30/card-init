import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "Html/Css",
    level: "Advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "Advanced",
    color: "#EFD81E"
  },
  {
    skill: "Web Design",
    level: "Advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "Intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "Advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "Beginner",
    color: "#FF3B00"
  }
];

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
     {skills.map(item => <Skill skill={item.skill} 
     color={item.color} level={item.level}/>)}
    </div>
  );
}
function Skill({skill, color, level}) {
  return (
    <div className="skill" style={{backgroundColor: color}}>
      <span>{skill}</span>
      <span>
        {level==="Beginner" && "👶"}
        {level==="Intermediate" && "👍"}
        {level==="Advanced" && "⭐"}
      </span>
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
