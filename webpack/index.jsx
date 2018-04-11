import React from "react";
import { render } from "react-dom";
import ProjectList from "./components/Projects.jsx";

window.addEventListener("load", () => {
	const $projectList = document.getElementById("project-list");

	render(<ProjectList />, $projectList);
});
