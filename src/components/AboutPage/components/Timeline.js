import React from 'react';

export default function Timeline(props) {
  return (
    <>
      <div className="timeline__name">
        <h2>
          {' '}
          <u> {props.name}</u>
        </h2>
      </div>
      <div className="timeline__content">
        <div className="row">
          <div className="timeline__img col-3 mt-3">
            <img className="img-fluid" src={props.img} alt="" />
          </div>
          <div className="col-lg-9">
            <p className="mt-2">
              <span className="category"> Role: </span>
              {props.role}
            </p>

            <p>
              <span className="category">Type: </span>
              {props.type}
            </p>

            <p className="">
              <span className="category">Description: </span>
              {props.description}
            </p>

            <div className="row">
              <div className="col-lg-6">
                <p>
                  {props.location} | {props.date}
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  Link:{' '}
                  <a href={props.url} target="_blank" rel="noreferrer">
                    www.{props.name.split(' ').join('').toLowerCase()}.com
                  </a>
                </p>
                {props.publication && (
                  <>
                    {' '}
                    <p className="timeline__publication">
                      Publication:{' '}
                      <a href={props.url} target="_blank" rel="noreferrer">
                        {props.publication}
                      </a>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {props.name2 && (
        <div className="timeline__extra">
          <div className="timeline__name">
            <h2>
              <u>{props.name2}</u>
            </h2>
          </div>
          <div className="timeline__content">
            <div className="row">
              <div className="timeline__img col-3 mt-3">
                <img className="img-fluid" src={props.img2} alt="" />
              </div>
              <div className="col-lg-9">
                <p className="mt-2">
                  <span className="category"> Role: </span>
                  {props.role2}
                </p>

                <p>
                  <span className="category">Type: </span>
                  {props.type2}
                </p>

                <p>
                  <span className="category">Description: </span>
                  {props.description2}
                </p>

                <div className="row">
                  <div className="col-lg-6">
                    <p>
                      {props.location2} | {props.date2}
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      Link:{' '}
                      <a href={props.url2} target="_blank" rel="noreferrer">
                        www.{props.name2.split(' ').join('').toLowerCase()}.com
                      </a>
                    </p>
                    {props.publication && (
                      <>
                        {' '}
                        <p className="timeline__publication">
                          Publication:{' '}
                          <a href={props.url} target="_blank" rel="noreferrer">
                            {props.publication}
                          </a>
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
