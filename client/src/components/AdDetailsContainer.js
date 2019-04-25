import React from "react";
import { connect } from "react-redux";
import AdDetails from "./AdDetails";
import { loadAd } from "../actions/ads";

class AdDetailsContainer extends React.Component {
  componentDidMount() {
    console.log(this.props.ad);
    this.props.loadAd(this.props.ad);
  }
  render() {
    return <AdDetails ad={this.props.ad} />;
  }
}

const mapStateToProps = state => ({
  ad: state.ad
});

export default connect(
  mapStateToProps,
  { loadAd }
)(AdDetailsContainer);
