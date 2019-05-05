import React from "react";
import { connect } from "react-redux";
import AdDetails from "./AdDetails";
import { loadAd, updateAd } from "../actions/ads";

class AdDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadAd(this.props.match.params.id);
  }

  //   onDelete = () => {
  //     this.props.deleteAd(this.props.ad.id);
  //     this.props.history.push("/");
  //   };
  state = { editMode: false };

  onEdit = () => {
    //console.log("Check the state onClickhere:", this.state);
    // intialize editing mode:
    // set the starting value of the fields to the ad details
    this.setState({
      editMode: true,
      formValues: {
        title: this.props.ad.title,
        description: this.props.ad.description,
        price: this.props.ad.price,
        email: this.props.ad.email,
        phone: this.props.ad.phone,
        picture: this.props.ad.picture
      }
    });
  };

  onChange = ad => {
    // update the formValues property with the new data from the input field
    this.setState({
      formValues: {
        ...this.state.formValues,
        [ad.target.name]: ad.target.value
      }
    });
  };

  onSubmit = ad => {
    ad.preventDefault();
    this.setState({
      editMode: false
    });
    console.log("this.state test", this.state);
    console.log("HIERRRRR", this.props);
    this.props.updateAd(this.props.ad.id, this.state.formValues);
  };
  render() {
    return (
      <div>
        <AdDetails
          onDelete={this.onDelete}
          onEdit={this.onEdit}
          editMode={this.state.editMode}
          ad={this.props.ad}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          formValues={this.state.formValues}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ad: state.ad
});

export default connect(
  mapStateToProps,
  { loadAd, updateAd }
)(AdDetailsContainer);
