import React from 'react';
import './AboutPage.css';
//data
import json from './AboutData.json';
//components
import { Tab, Tabs } from 'react-bootstrap';
import Timeline from './Timeline';
//img
import LogoKumon from './img/kumon.png';
import LogoGmu from './img/gmu.png';
import LogoSolomon from './img/solomon.png';
import LogoKotra from './img/kotra.png';
import LogoMtech from './img/mtech.png';
import LogoHhmi from './img/hhmi.png';
import LogoGw from './img/gw.png';

export default function AboutPage() {
  return (
    <div className="aboutPage">
      <div className="jumbotron">
        <div className="aboutPage__heading">
          <h2>ABOUT ME</h2>
          <hr />
        </div>
        <div className="aboutPage__body">
          <div className="overview">
            <h4>Overview</h4>
            <p>
              Aspiring Junior Developer. Recently graduated from George
              Washington University's fast pace Coding Bootcamp. Always willing
              to learn. Keen eye for aesthetics and presentation.
            </p>
          </div>
          <div className="timeline">
            <h4>Timeline</h4>
            <Tabs
              justify
              defaultActiveKey="timeline__1"
              className="aboutPage__Tabs"
            >
              <Tab
                eventKey="timeline__1"
                title="2008-2010"
                className="timeline__tab"
              >
                <Timeline
                  name={json.timeline_1.name}
                  role={json.timeline_1.role}
                  type={json.timeline_1.type}
                  description={json.timeline_1.description}
                  location={json.timeline_1.location}
                  url={json.timeline_1.url}
                  date={json.timeline_1.date}
                  img={LogoKumon}
                />
              </Tab>
              <Tab eventKey="gmu" title="2010-2016">
                <Timeline
                  name={json.timeline_2.name}
                  role={json.timeline_2.role}
                  type={json.timeline_2.type}
                  description={json.timeline_2.description}
                  location={json.timeline_2.location}
                  url={json.timeline_2.url}
                  date={json.timeline_2.date}
                  img={LogoGmu}
                  name2={json.timeline_3.name}
                  role2={json.timeline_3.role}
                  type2={json.timeline_3.type}
                  description2={json.timeline_3.description}
                  location2={json.timeline_3.location}
                  url2={json.timeline_3.url}
                  date2={json.timeline_3.date}
                  img2={LogoSolomon}
                />
              </Tab>
              <Tab eventKey="freelance" title="2016-2017">
                <Timeline
                  name={json.timeline_4.name}
                  role={json.timeline_4.role}
                  type={json.timeline_4.type}
                  description={json.timeline_4.description}
                  location={json.timeline_4.location}
                  url={json.timeline_4.url}
                  date={json.timeline_4.date}
                  img={LogoKotra}
                  name2={json.timeline_5.name}
                  role2={json.timeline_5.role}
                  type2={json.timeline_5.type}
                  description2={json.timeline_5.description}
                  location2={json.timeline_5.location}
                  url2={json.timeline_5.url}
                  date2={json.timeline_5.date}
                  img2={LogoMtech}
                />
              </Tab>
              <Tab eventKey="hhmi" title="2017-2020">
                <Timeline
                  name={json.timeline_6.name}
                  role={json.timeline_6.role}
                  type={json.timeline_6.type}
                  description={json.timeline_6.description}
                  location={json.timeline_6.location}
                  url={json.timeline_6.url}
                  date={json.timeline_6.date}
                  publication={json.timeline_6.publication}
                  img={LogoHhmi}
                />
              </Tab>
              <Tab eventKey="current" title="2020">
                <Timeline
                  name={json.timeline_7.name}
                  role={json.timeline_7.role}
                  type={json.timeline_7.type}
                  description={json.timeline_7.description}
                  location={json.timeline_7.location}
                  url={json.timeline_7.url}
                  date={json.timeline_7.date}
                  img={LogoGw}
                />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
