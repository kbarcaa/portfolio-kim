import React from 'react';
import ProjectModal from './ProjectModal';

export default function Project(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <button
        variant="primary"
        onClick={() => setModalShow(true)}
        className="col-lg-3 col-sm-6 project__btn"
      >
        {/* use image2 if exists, if not, then use image */}
        <img
          src={props.image2 ? props.image2 : props.image}
          alt="🖼️ here"
          className="project__img"
        />
        <h3>{props.title}</h3> <p>{props.date}</p>
      </button>

      <ProjectModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={props.title}
        url={props.url}
        github={props.github}
        description={props.description}
        utilized={props.utilized}
        image={props.image}
        image3={props.image3}
      />
    </>
  );
}
