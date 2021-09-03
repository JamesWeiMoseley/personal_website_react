import React from "react";
import "./Cards.css";

function About() {
  return (
    <div id="about" className="about">
      <h2>Skills and Technologies</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3>Languages</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>C</li>
              <li>C++</li>
              <li>Dart</li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3>Frameworks/Libraries</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ul>
              <li>REACT</li>
              <li>Flutter</li>
              <li>Redux</li>
              <li>Bootstrap</li>
              <li>Material UI</li>
              <li>Express.js</li>
              <li>Next.js</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3>Tools</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ul>
              <li>Linux</li>
              <li>Git</li>
              <li>VSCode</li>
              <li>Docker</li>
              <li>Bukkit</li>
              <li>Eclipse</li>
              <li>MySQL</li>
              <li>NoSQL</li>
              <li>Heroku</li>
              <li>Firebase</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
