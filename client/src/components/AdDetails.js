import React from "react";
import AdForm from "./AdForm";
import { Link } from "react-router-dom";
import "./AdDetails.css"

export default function AdDetails(props) {
  console.log("PROPSSSS", props.ad);
  return (
    <div className="AdDetailsContainer">
      {props.ad && !props.editMode && (
        <div className="AdDetails">
          <h1>{props.ad.title} </h1>
          <p>{props.ad.description} </p>
          <p>$ {props.ad.price} </p>
          <p>{props.ad.email} </p>
          <p>{props.ad.phone} </p>
          <img className="images" src={props.ad.picture} alt={props.ad.description} />
          <br/>
          <button className="AdDetailsButtons" onClick={props.onEdit}>
            Edit
          </button>
        </div>
      )}
      {props.editMode && (
        <div className="AdForm">
          <AdForm
            values={props.formValues}
            onChange={props.onChange}
            onSubmit={props.onSubmit}
          />
        </div>
      )}
      <Link to="/">
        <button className="AdDetailsButtons">Home</button>
      </Link>
    </div>
  );
}
