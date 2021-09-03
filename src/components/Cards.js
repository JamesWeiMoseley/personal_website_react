import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div id="p" className="cards">
      <h2>Projects</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  minWidth: "33%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CardItem
                  src="images/webscraper.png"
                  path="https://jamesweimoseley.github.io/web_scraper_GUI/"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h1>Web Scraper and Translator API </h1>
                <p style={{ fontSize: "20px" }}>
                  Custom web scraper API that gets text from websites and breaks
                  it down to the different parts of speech. Front end uses axios
                  to scrape text from any website. Back end custom API then
                  returns text labeled with noun, verb, etc. Uses HTTP requests
                  to send information and is hosted on Heroku. <br></br> Tools:
                  Javascript, Node.js, Express.js, Axios
                </p>
                <p>
                  <i class="fab fa-js-square"></i> <i class="fab fa-html5"></i>{" "}
                  <i class="fab fa-css3-alt"></i>
                </p>
              </div>
            </div>
          </ul>
          <ul className="cards__items">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  minWidth: "33%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CardItem
                  src="images/narkman.png"
                  path="http://narkmangolf.com/"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h1>GOLF ACADEMY WEBSITE: </h1>
                <p style={{ fontSize: "20px" }}>
                  Full stack website for a Southern California Golf Academy. The
                  backend uses node.js, express, and mongoose. MongoDB servers
                  are used for storing information. Twilio plugins are used for
                  text alerts. Front end uses templating engin HBS(Handlebars)
                  and CSS. <br></br> Tools: Javascript, HBS, CSS, Express.js,
                  NoSQL, Node.js, Twilio
                </p>
                <p>
                  <i class="fab fa-js-square"></i> <i class="fab fa-node"></i>{" "}
                  <i class="fas fa-database"></i> <i class="fab fa-react"></i>
                </p>
              </div>
            </div>
          </ul>
          <ul className="cards__items">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  minWidth: "33%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CardItem
                  src="images/minecraft.png"
                  path="https://github.com/JamesWeiMoseley/bukkitplugins"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h1>BUKKIT PLUGINS: </h1>
                <p style={{ fontSize: "20px" }}>
                  Plugins for Minecraft Java. Uses the open source Bukkit API
                  and Spigot Servers. All files complied as a JAR file and are
                  free and downloadable to be placed into anyones server.{" "}
                  <br></br> Tools: Java, Bukkit, Spigot, Eclipse
                </p>
                <p>
                  <i class="fab fa-java"></i>
                </p>
              </div>
            </div>
          </ul>
          <ul className="cards__items">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  minWidth: "33%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CardItem
                  src="images/uqueue.jpeg"
                  path="https://devpost.com/software/uqueue"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h1>UQUEUE HACKATHON SUBMISSION: </h1>
                <p style={{ fontSize: "20px" }}>
                  A submission for BeaverHacks Summer 2020 Hackathon. It is a
                  digital queuing application for small business to allow
                  customers to join a queue from the safety of their home or
                  cars. Businesses have a portal where they can create, read,
                  update, and delete their customers <br></br> Tools:
                  Javascript, node.js, MongoDB, Boostrap, Heroku
                </p>
                <p>
                  <i class="fab fa-js-square"></i> <i class="fab fa-node"></i>{" "}
                  <i class="fas fa-database"></i>{" "}
                  <i class="fab fa-bootstrap"></i>
                </p>
              </div>
            </div>
          </ul>
          <ul className="cards_items">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  minWidth: "33%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CardItem src="images/sudoku_pic.png" path="sudoku" />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h1>SUDOKU INTERACTIVE GUI SOLVER: </h1>
                <p style={{ fontSize: "20px" }}>
                  The classic sudoku puzzle game. The algorithm uses recursive
                  backtracking to solve the puzzle. The application is written
                  in python3 using pygames for the GUI. The game gives you the
                  options to try and solve it, have it solve it for you or pick
                  a new game. <br></br> Tools: Python, Pygames
                </p>
                <p>
                  <i class="fab fa-python"></i>
                </p>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
