import React from "react";

export default function AdDetails(props) {
  console.log("PROPSSSS", props.ad.id);
  return (
    <div className="AdDetailsContainer">
      <h1>{props.ad.title} </h1>
      <p>{props.ad.description} </p>
      <p>$ {props.ad.price} </p>
      <p>{props.ad.email} </p>
      <p>{props.ad.phone} </p>
      <img src={props.ad.picture} alt={props.ad.description} />
    </div>
  );
}
