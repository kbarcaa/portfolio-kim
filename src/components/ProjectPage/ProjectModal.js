import React from 'react';
import { Modal } from 'react-bootstrap';

export default function ProjectModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="project__modalBody">
        <p>{props.description}</p>
        <img
          className="ml-2 mb-3 img-fluid project__modalImg"
          src={props.image}
          alt=" 🖼️ goes here"
        />

        {/* if image3 exisist ? render <img> : if not null. */}
        {props.image3 && (
          <div className="extra__img">
            <img
              className="ml-2 mt-3 img-fluid project__modalImg "
              src={props.image3}
              alt=" 🖼️ goes here"
            />
          </div>
        )}
        <hr />
        <p className="project__p"> Utilized: {props.utilized}</p>
        <a
          className="btn project__button"
          href={props.github}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github project__icon"></i>
          View Code
        </a>
        <a
          className="btn project__button"
          href={props.url}
          target="_blank"
          rel="noreferrer"
        >
          <i className="far fa-paper-plane project__icon"></i>
          Deployed Link
        </a>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn project__button" onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}
