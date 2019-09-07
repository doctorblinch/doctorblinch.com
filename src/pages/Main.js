import React from "react";
import {Helmet} from "react-helmet";

const Main = () => {
  return(
  <div>
    <Helmet>
      <title>Me</title>
    </Helmet>
    <div className="block-content">
      <h1 >Hi there!</h1>
      <div>
        <p className="with_line">My name is Ivan, I live and study in Kyiv.<br/></p>
        <h3>Education</h3>
        <div>
          <p>
            <b>2017-Now </b>
            Bachelors at National Technical University of Ukraine
            “Igor Sikorsky Kyiv Polytechnic Institute“.
            Information systems and technologies specialization.
            Governmental scholarship for good academic performance.
          </p>
          <p className="with_line">
            <b>2013-2017 </b>
            High school at Kyiv Natural Scientific Lyceum No145
            Average grade: 10.7 / 12 (89%)
          </p>
        </div>
        <h3>Programming languages:</h3>
        <div>
          <ul>
            <li>
              Python
              <ul>
                <li>Web development</li>
                <li>Voice and face pattern recognition systems</li>
                <li>Minor experience with machine learning</li>
                <li>Games bot writing</li>
              </ul>
            </li>
            <li>
              C/C++
              <ul>
                <li>Linux desktop apps</li>
                <li>Embedded Linux</li>
              </ul>
            </li>
            <li>
              JavaScript
              <ul>
                <li>Web development</li>
              </ul>
            </li>
            <li>
              Java
              <ul>
                <li>Android application</li>
              </ul>
            </li>
          </ul>

        </div>
        <p className="with_line"></p>
        <div>
          <h3>Skills</h3>
          <ul>
            <li>Networks and computer systems</li>
            <li>Mathematical analysis and statistics</li>
            <li>Algorithm theory and cryptography</li>
            <li>SQL, ORM</li>
            <li>Git, Docker</li>
          </ul>
        </div>
        <p className="with_line"></p>
        <div>
          <h3>Projects</h3>
          <ul>
            <li>University chat website development</li>
            <li>Search engines scrapper</li>
            <li>Internship at Global Logic on embedded Smart City project</li>
            <li>Telegram schedule bot</li>
            <li>Graph visualization program</li>
            <li>Sorting visualization program</li>
            <li>Quiz program</li>
            <li>Semantic affinity single page app</li>
          </ul>
        </div>
      </div>
      <p className="with_line"></p>
      <div>
        Now, I would like to elaborate on my interests and motivation.
        Coming from the physical-mathematical background of the
        specialized lyceum, I found interest in how the nature can be
        described and manipulated using the physical models. In parallel, I
        have encountered programming in the frame of robotechnics and
        smartphones sensor systems as part of Ukrainian Intel Techno
        competition in 2015. Math helped me bridge the understanding
        and explore these areas of knowledge. Looking for challenges, I
        was taking part in the nation-wide competitions in math,
        programming and physics wining the Kyiv city stages. Besides that,
        I participated in physical experimental Olympiad and group
        competitions in theoretical math. These experiences helped me
        develop my problem solving skills and broaden my horizons.
        I have enrolled in Kyiv Polytech and continued my studies in
        computer science to join the diverse and rapidly growing industry.
        Here I carried on with competitions such as “KPI Open”
        programing contest and university-wide math Olympics. Besides
        that, I am exploring diverse trends of IT doing my pet-projects.
        Currently I am interested in the powerful method of Machine
        Learning and its applications.
      </div>
      <p className="with_line"></p>
      <div style={{marginBottom:"10%"}}>
        <h4>Have any questions?</h4>
        Please <a href={"/contact"}>contact me!</a>
      </div>

    </div>
  </div>
  );
};

export default Main;
