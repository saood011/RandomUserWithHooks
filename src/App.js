import React, { useState, useEffect } from "react";
import ResultList from "./resultList";
import "./App.css";
export default function Example() {
  const [count, setCount] = useState(0);
  const [results, setResults] = useState([]);
  const [shouldRender, setshouldRender] = useState(false);
  const [gender, setGender] = useState("female");
  const [national, setNational] = useState("gb");
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    if (shouldRender) {
      fetch(
        `https://randomuser.me/api/?results=${count}&nat=${national}&gender=${gender}`
      )
        .then(res => res.json())
        .then(jsonData => setResults([...jsonData.results]));

      setshouldRender(false);
    }
    console.log(results);
  });
  return (
    <div className="d-flex flex-nowrap">
      <div className="bg-danger p-3 text-center">
        <p>Select the nationality:</p>
        <select
          onChange={e => {
            setNational(e.target.value);
          }}
        >
          <option value="">Select</option>
          <option value="us">American</option>
          <option value="gb">Great Britain</option>
          <option value="nz">New Zealand</option>
          <option value="de">German</option>
        </select>
        <p></p>
        <form action="">
          <p>Select the gender:</p>
          <input
            type="radio"
            onClick={() => setGender("male")}
            name="gender"
            value="male"
          />{" "}
          Male
          <input
            type="radio"
            onClick={() => setGender("female")}
            name="gender"
            value="female"
          />{" "}
          Female
        </form>
        <p></p>
        <p>Now showing {count} users</p>
        <ul>
          {results.map(res => (
            <li key={res.cell}>{res.name.first}</li>
          ))}
        </ul>
        <button
          className="btn btn-info"
          onClick={() => {
            setCount(count + 1);
            setshouldRender(true);
          }}
        >
          Add User
        </button>
      </div>
      <ResultList myData={results} />
    </div>
  );
}
