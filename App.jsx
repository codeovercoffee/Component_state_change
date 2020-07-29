import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [contact, setcontact] = useState({
    fname: "",
    lname: "",
    email: ""
  });

  const [mouse_over, setmouse_over] = useState(false);

  function handleclick(event) {
    //console.log("clicked");
    setcontact(contact);
    event.preventDefault();
  }
  function updatename(event) {
    var newname = event.target.value;
    const iname = event.target.name;
    setcontact(pValue => {
      if (iname === "fname") return { fname: newname, lname: pValue.lname };
      else if (iname === "lname")
        return { fname: pValue.fname, lname: newname };
      else return { fname: pValue.fname, lname: pValue.lname, email: newname };
    });
  }

  function mouseover() {
    setmouse_over(true);
  }

  function mouseout() {
    setmouse_over(false);
  }

  return (
    <div className="container">
      <form onSubmit={handleclick}>
        <h1>
          Hello {contact.fname} {contact.lname}{" "}
        </h1>
        <p> {contact.email}</p>
        <input
          value={contact.fname}
          onChange={updatename}
          name="fname"
          type="text"
          placeholder="Whats your First name"
        />
        <input
          value={contact.lname}
          name="lname"
          onChange={updatename}
          type="text"
          placeholder="Whats your Last name"
        />
        <input
          value={contact.email}
          name="email"
          onChange={updatename}
          type="text"
          placeholder="Your e-mail ID"
        />

        <button
          onMouseOver={mouseover}
          onMouseOut={mouseout}
          style={{ backgroundColor: mouse_over ? "black" : "white" }}
        >
          Submit{" "}
        </button>
      </form>{" "}
    </div>
  );
}
