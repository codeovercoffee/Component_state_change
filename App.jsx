import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [fullname, setfullname] = useState({
    fname: "",
    lname: ""
  });

  const [mouse_over, setmouse_over] = useState(false);

  function handleclick(event) {
    //console.log("clicked");
    setfullname(fullname);
    event.preventDefault();
  }
  function updatename(event) {
    var newname = event.target.value;
    const iname = event.target.name;
    setfullname(pValue => {
      if (iname === "fname") return { fname: newname, lname: pValue.lname };
      else return { fname: pValue.fname, lname: newname };
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
          Hello {fullname.fname} {fullname.lname}{" "}
        </h1>
        <input
          value={fullname.fname}
          onChange={updatename}
          name="fname"
          type="text"
          placeholder="Whats your First name"
        />
        <input
          value={fullname.lname}
          name="lname"
          onChange={updatename}
          type="text"
          placeholder="Whats your Last name"
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
