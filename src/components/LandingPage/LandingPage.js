import React from 'react';
import './LandingPage.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function LandingPage() {
  return (
    <div className="landingPage">
      <ul className="landingPage__slideshow">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="landingPage__body">
        <div className="col-12">
          <h1>
            Mason<span className="text-light"> SungJin </span>Kim
          </h1>
          <hr />
          <h2>Full Stack Web Developer</h2>
          <div className="landingPage__icons">
            <OverlayTrigger overlay={<Tooltip>sungjinkimm@gmail.com</Tooltip>}>
              {/* eslint-disable-next-line  */}
              <a className="d-inline-block">
                <i className="far fa-envelope" />
              </a>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>github.com/masonkimm</Tooltip>}>
              <a
                className="d-inline-block"
                target="_blank"
                href="https://github.com/masonkimm"
                rel="noreferrer"
              >
                <i className="fab fa-github" />
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              overlay={<Tooltip>linkedin.com/in/masonkimm</Tooltip>}
            >
              <a
                className="d-inline-block"
                target="_blank"
                href="https://www.linkedin.com/in/masonkimm"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin" />
              </a>
            </OverlayTrigger>
          </div>
        </div>
      </div>
    </div>
  );
}
