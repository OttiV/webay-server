import React from "react";
import { loadAds } from "../actions/ads";
import { connect } from "react-redux";
import AdsList from "./AdsList";
// import CreateEventFormContainer from "./CreateEventFormContainer";

class AdsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadAds();
  }

  render() {
    return (
      <>
        {Array.isArray(this.props.ads) && <AdsList ads={this.props.ads} />}
        {/* <CreateAdsFormContainer /> */}
      </>
    );
  }
}

const mapStateToProps = state => ({
  ads: state.ads
});

export default connect(
  mapStateToProps,
  { loadAds }
)(AdsListContainer);
