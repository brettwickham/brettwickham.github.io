import React from "react";
import { render } from "react-dom";
import ProjectList from "./components/Projects.jsx";
import heroHandleScroll from "./components/hero.jsx";

window.addEventListener("load", () => {
  const $hero = document.getElementById("hero");
	const $projectList = document.getElementById("project-list");
  const $smoothScroll = document.querySelector(".smooth-scroll");
	const filterTags = [
    "All",
    "Adobe Experience Manager",
    "Jekyll",
    "WordPress",
    "AngularJS",
    "Bootstrap",
    "Handlebars",
    "jQuery",
    "React",
    "Grunt",
    "Gulp",
    "Less",
    "Sass"
  ];

  // React component
  render(<ProjectList filterTags={filterTags} />, $projectList);

  // Hero scroll animation
  heroHandleScroll($hero);

});
