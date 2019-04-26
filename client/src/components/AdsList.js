import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AdsList.css";

export default class AdsList extends Component {
  renderAd(ad) {
    return (
      <li className="Ads" key={ad.id}>
        <Link to={`/ads/${encodeURIComponent(ad.id)}`}>
          {ad.title}, <i>$ {ad.price}</i> <br />
          <img className="images" src={ad.picture} alt={ad.description} />
        </Link>
      </li>
    );
  }

  render() {
    const { ads } = this.props;

    return (
      <div className="AdsList">
        <h1 className="WeBay">WeBay</h1>

        {!ads && "Loading..."}

        {ads && <ul>{ads.map(this.renderAd)}</ul>}
      </div>
    );
  }
}
