import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    location: "",
    personalIdNumber: "",
    name: "",
    sureName: "",
  });

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  useEffect(() => {
    setFormData({
      location: loading || !profile.location ? "" : profile.location,
      personalIdNumber:
        loading || !profile.personalIdNumber ? "" : profile.personalIdNumber,
      name: loading || !profile.name ? "" : profile.name,
      sureName: loading || !profile.sureName ? "" : profile.sureName,
    });
  }, [loading, profile]);

  const { location, personalIdNumber, name, sureName } = formData;

  const onChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    createProfile(formData, history, true);
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Create Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Personal Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">Type your name</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Personal Surename"
            name="sureName"
            value={sureName}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">Type your surename</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Personal ID number"
            name="personalIdNumber"
            value={personalIdNumber}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">Type your personal id number</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            City & state suggested (eg. Warszawa, PL)
          </small>
        </div>
        <input type="submit" className="btn btn-primary my-1" value="Submit" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
