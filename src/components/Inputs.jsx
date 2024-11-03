import "../styles/inputs.css";
import { useState } from "react";

function Inputs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [submittedNumber, setSubmittedNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
    setSubmittedEmail(email);
    setSubmittedNumber(number);
  };
  return (
    <>
      <div className="cvDiv">
        <div className="inputCard">
          <div className="inputHeader">General Info</div>
          <form className="inputForm">
            <input
              type="text"
              className="inputField"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="inputField"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="telephone"
              className="inputField"
              placeholder="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <button className="submitButton" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
        <div className="cvContainer">
          <h1 className="infoHeader">General Info</h1>
          <h2>{submittedName}</h2>
          <p>{submittedEmail}</p>
          <p>{submittedNumber}</p>
        </div>
      </div>
    </>
  );
}

export default Inputs;
