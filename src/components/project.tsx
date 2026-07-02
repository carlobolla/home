import React from "react";
import { Button } from "../components";
import { Project } from "../classes";

export const ProjectCard = (props: Project) => {
  const modalId = props.text.replace(/\s/g, "");
  return(
    <div className="col-6 justify-content-end d-flex flex-column">
      <img style={{"width": "100%", "height": "auto"}} data-bs-toggle="modal" data-bs-target={'#' + modalId} className="project-thumb border border-2 img-fluid" src={props.imgLink} alt="Project" />
      <Button className='align-self-center mt-3 w-75' text={props.text} link={props.link}></Button>
      <div id={modalId} className="modal fade mt-5" tabIndex={-1}>
        <div className="modal-dialog modal-xl">
          <img className="border img-fluid rounded" src={props.imgLink} alt="Project" />
        </div>
      </div>
    </div>
  )
}