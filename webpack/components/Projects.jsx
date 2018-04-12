import React, { Component } from "react";
import axios from "axios";

class ProjectRow extends Component {
  render() {
  	const project = this.props.project;
    const tagList = project.tags.map(tag => {
      return (
        <li>{tag}</li>
      )
    });

    return (
      <div className="col-sm-6">
      	<div className="card">
          <img className="card-img-top" src={project.project_image} alt={project.title} />
          <div className="card-body">
        	  <h4 className="card-title">{project.title}</h4>
        	  <div className="card-subtitle mb-2 text-muted" dangerouslySetInnerHTML={{__html: project.content}} />
            <ul className="list-unstyled">
              {tagList}
            </ul>
            <a className="card-link" href={project.project_link} target="_blank">Project link</a>
          </div>
        </div>
      </div>
    )
  }
}

class ProjectTagFilter extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTagClick = this.handleFilterTagClick.bind(this);
  }

  handleFilterTagClick(event) {
    event.preventDefault();
    let filterTagActive = event.target.innerHTML;
    this.props.onFilterTagClick(filterTagActive);
  }

  render() {
    const filterTagActive = this.props.filterTagActive;
    const filterTags = this.props.filterTags;
    let lastGroup = null;

    const filterTagList = filterTags.map(tag => {
      if (tag === filterTagActive) {
        return (
          <button className="btn btn-sm btn-light active" onClick={this.handleFilterTagClick}>{tag}</button>
        )
      } else {
        return (
          <button className="btn btn-sm btn-light" onClick={this.handleFilterTagClick}>{tag}</button>
        )
      }
    });

    return (
      <div className="btn-group mb-4" role="group" label="Filters">
        {filterTagList}
      </div>
    )
  }
}

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      filterTagActive: "All"
    };

    this.handleFilterTagClick = this.handleFilterTagClick.bind(this);
  }

  handleFilterTagClick(filterTagActive) {
    this.setState({
      filterTagActive: filterTagActive
    });
  }

  componentDidMount() {
    axios.get("/projects.json")
      .then((response) => {
        this.setState({ projects: response.data.projects });
      });
  }

  render() {
  	const projects = this.state.projects;
    const filterTagActive = this.state.filterTagActive;
    const filterTags = this.props.filterTags;

  	const rows = projects.map(project => {
      if (filterTagActive === "All") {
        return (
          <ProjectRow project={project} />
        )
      } else if (project.tags.indexOf(filterTagActive) > -1) {
        return (
          <ProjectRow project={project} />
        )
      }
  	});

    return (
      <div className="project-list">
        <ProjectTagFilter
          filterTags={filterTags}
          filterTagActive={filterTagActive}
          onFilterTagClick={this.handleFilterTagClick} />
        <div className="row">
          {rows}
        </div>
      </div>
    )
  }
}

export default ProjectList;
