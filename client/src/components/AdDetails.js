import React from "react";
import AdForm from "./AdForm";
import { Link } from "react-router-dom";

export default function AdDetails(props) {
  console.log("PROPSSSS", props.ad.id);
  return (
    <div className="EventDetailsContainer">
      {props.ad && !props.editMode && (
        <div className="AdDetails">
          <h1>{props.ad.title} </h1>
          <button className="AdDetailsButtons" onClick={props.onEdit}>
            Edit
          </button>
          <p>{props.ad.description} </p>
          <p>$ {props.ad.price} </p>
          <p>{props.ad.email} </p>
          <p>{props.ad.phone} </p>
          <img src={props.ad.picture} alt={props.ad.description} />
        </div>
      )}
      {props.editMode && (
        <div className="AdForm">
          <AdForm
            values={props.formValues}
            onChange={props.onChange}
            onSubmit={props.onSubmit}
          />
          <Link to="/">
            <button className="AdDetailsButtons">Events</button>
          </Link>
        </div>
      )}
    </div>
  );
}
