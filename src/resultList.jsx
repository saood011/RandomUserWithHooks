import React from "react";

export default function ResultList(props) {
  return (
    <div className="d-flex flex-wrap">
      {props.myData.map(v => (
        <div className="card">
          <img src={v.picture.large} className="card-img-top p-2" alt="..." />
          <div className="card-body p-2">
            <h5 className="card-title text-center">
              {v.name.title + " "}
              {v.name.first + " "}
              {v.name.last}
            </h5>
            <p className="card-text ">
              {v.location.city + ", "} {v.location.country + " "}
            </p>
          </div>
          <ul className="list-group list-group-flush p-0">
            <li className="list-group-item">
              {v.cell} <br />
              {v.email}
            </li>
            <li className="list-group-item">{v.dob.age} years old</li>
            <li className="list-group-item">{v.gender}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
