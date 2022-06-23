import React from "react";
import { Contact, Project } from "../classes";
import { ContactInfo, Navbar, ProjectCard } from "../components";
import contacts from '../contacts.json'
import projects from '../projects.json'

export const Home = () => {
  return (
    <>
      <Navbar />  
      <div className="container my-5">
        <div className='row'>
          <div className='d-flex align-items-center col-4 col-md-4 col-lg-3 col-xl-2'>
            <img src="propic.jpg" alt="propic" className='img-thumbnail rounded-circle' />
          </div>
          <div className='col-8 col-md-8 col-lg-9 col-xl-10 justify-content-center d-flex flex-column'>
            <h1 className="display-1">Hello, world!</h1>
            <h2>My name is <strong style={{ color: '#86A8E7' }}>Carlo</strong></h2>
            <p>
              I'm a fullstack developer living and working in Italy! 🇮🇹
            </p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="row">
          <div className="col text-center">
            <h1>My projects</h1>
          </div>
        </div>
        <hr />
        <div className="row gy-5 mb-5">
          {
            projects.map((p: Project) => {
              return (
                <ProjectCard key={p.text} imgLink={p.imgLink} link={p.link} text={p.text} external={p.external}></ProjectCard>
              )
            })
          }
          {
            projects.length % 2 !== 0 ?
              <div className="col-6 justify-content-center d-flex flex-column">
                <h4 className="text-center text-muted">More coming soon...</h4>
              </div>
              :
              null
          }
        </div>
        <div className='container'>
          <div className="row">
            <div className="col text-center">
              <h1>My contacts</h1>
            </div>
          </div>
          <hr />
          <div className="row gy-3 mb-5">
            {contacts.map((c: Contact) => {
              return (
                <div key={c.text} className="col-6 col-sm-4 col-lg-2">
                  <ContactInfo link={c.link} icon={c.icon} text={c.text} color={c.color} onclick={c.onclick}></ContactInfo>
                </div>
              )
            })}
          </div>
        </div>
        <div className="container">
          <p className='text-center text-muted'>Built with 💚 using <a className="text-muted" href="https://reactjs.org/">React</a> and <a className="text-muted" href="https://getbootstrap.com/">Bootstrap</a> - © 2022</p>
        </div>
      </div>
    </>
  )
}