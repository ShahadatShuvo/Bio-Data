import React from "react";

function BioData(props) {
  return (
    <div className="card">
      <img src={props.imgURL} height="300px" width="100%" alt="" />
      <div className="text-content">
        <p>
          First Name: {props.firstName} <br /> Last Name: {props.lastName}{" "}
          <br />
          Email:{props.email} <br />
          Phone: {props.phone} <br />
          Facebook: {props.facebook} <br />
          Country: {props.country} <br />
          State: {props.state} <br />
          City: {props.city} <br />
          Skills: {props.skills.join(", ").toString()} <br />
          Interests: {props.interests.join(", ").toString()}
        </p>
      </div>
    </div>
  );
}

export default BioData;
