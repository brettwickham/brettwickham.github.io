import React from "react";
import { render } from "react-dom";
import ProjectList from "./components/Projects.jsx";

window.addEventListener("load", () => {
  const $hero = document.getElementById("hero");
	const $projectList = document.getElementById("project-list");
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
  handleScrollHero($hero);
});

const handleScrollHero = ($hero) => {
  const position = ($hero.offsetHeight + $hero.offsetTop);
  const $heroLeft = $hero.querySelectorAll(".hero-left")[0];
  let scrollY = null;
  let percent = null;

  setTimeout(() => {
  $hero.classList.add("in");
    setTimeout(() => {
      $heroLeft.style.setProperty("-moz-transition", "width 100ms ease-out");
      $heroLeft.style.setProperty("-webkit-transition", "width 100ms ease-out");
      $heroLeft.style.setProperty("transition", "width 100ms ease-out");
    }, 1000);
  }, 500);

  window.addEventListener("scroll", (event) => {
    scrollY = window.scrollY;

    if (scrollY && scrollY <= position) {
      percent = ((position - scrollY) / position * 100 / 2);
      $heroLeft.style.setProperty("width", percent + "%");
    }
    else {
      $heroLeft.style.setProperty("width", "50%");
    }
  });
};
