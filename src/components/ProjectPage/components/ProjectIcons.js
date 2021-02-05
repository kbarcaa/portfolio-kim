import React from 'react';

export default function ProjectIcons() {
  return (
    <>
      <div className="justify-content-around d-flex">
        <div className="projectIcon__row">
          <h5>HTML5</h5>
          <i className="devicon-html5-plain colored fa-2x ml-3"></i>
        </div>
        <div>
          <h5>Bootstrap</h5>
          <i className="devicon-bootstrap-plain colored fa-2x ml-4"></i>
        </div>
        <div>
          <h5>CSS3</h5>
          <i className="devicon-css3-plain colored fa-2x ml-2"></i>
        </div>
        <div>
          <h5>JavaScript</h5>
          <i className="devicon-javascript-plain colored fa-2x ml-4"></i>
        </div>
        <div className="mr-4">
          <h5>React</h5>
          <i className="devicon-react-plain colored fa-2x ml-2"></i>
        </div>
      </div>

      <div className="justify-content-around d-flex mt-5">
        <div>
          <h5>Jquery</h5>
          <i className="devicon-jquery-plain colored fa-2x ml-lg-3"></i>
        </div>
        <div className="ml-lg-4">
          <h5>Node JS</h5>
          <i className="devicon-nodejs-plain colored fa-2x ml-lg-4"></i>
        </div>
        <div className="ml-lg-3">
          <h5>MySQL</h5>
          <i className="devicon-mysql-plain colored fa-2x ml-lg-3"></i>
        </div>
        <div className="ml-lg-4">
          <h5>MongoDB</h5>
          <i className="devicon-mongodb-plain colored fa-2x ml-lg-4"></i>
        </div>
        <div className="">
          <h5>Material UI</h5>
          <i className="devicon-materialui-plain colored fa-2x ml-lg-4"></i>
        </div>
      </div>
    </>
  );
}
