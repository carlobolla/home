import React from "react";
import { Button } from "../components";
import { Project } from "../classes";

export const ProjectCard = (props: Project) => {
  return(
    <div className="col-6 justify-content-center d-flex flex-column">
      <img data-bs-toggle="modal" data-bs-target={'#' + props.text.replace(" ", "")} className="border img-fluid" src={props.imgLink} alt="Project" />
      <Button className='align-self-center mt-3 w-75' text={props.text} link={props.link}></Button>
      <div id={props.text.replace(" ", "")} className="modal fade mt-5" tabIndex={-1}>
        <div className="modal-dialog modal-xl">
          <img className="border img-fluid rounded" src={props.imgLink} alt="Project" />
        </div>
      </div>
    </div>
  )
}