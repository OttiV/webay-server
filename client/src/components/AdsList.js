import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdsList extends Component {
  renderAd(ad) {
    return (
      <li key={ad.id}>
        <Link to={`/ads/${encodeURIComponent(ad.id)}`}>
          {ad.title}, $ {ad.price}
        </Link>
      </li>
    );
  }

  render() {
    const { ads } = this.props;

    return (
      <div className="ads">
        <h1>WeBay</h1>

        {!ads && "Loading..."}

        {ads && <ul>{ads.map(this.renderAd)}</ul>}
      </div>
    );
  }
}
