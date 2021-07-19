import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile'

const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        location: '',
        personalIdNumber: '',
        name: '',
        sureName: ''
    });

    const {
        location,
        personalIdNumber,
        name,
        sureName
    } = formData;

    const onChange = e => {
        const value = e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    }

    const onSubmit = e => {
        e.preventDefault();
        window.scrollTo(0, 0);
        createProfile(formData, history);
    }

    return (
        <Fragment>
            <h1 className="large text-primary">
                Create Your Profile
            </h1>
            <p className="lead">
                <i className="fas fa-user"></i> Let's get some information to make your
                profile stand out
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Personal Name" name="name" value={name} onChange={e => onChange(e)} />
                    <small className="form-text">Type your name</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Personal Surename" name="sureName" value={sureName} onChange={e => onChange(e)} />
                    <small className="form-text">Type your sureName</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Personal ID number" name="personalIdNumber" value={personalIdNumber} onChange={e => onChange(e)} />
                    <small className="form-text">Type your personal id number</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} />
                    <small className="form-text"
                    >City & state suggested (eg. Warszawa, PL)</small>
                </div>
                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </Fragment>
    )
}

CreateProfile.propTypes = {

}

const mapStateToProps = state => ({
    createProfile: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, { createProfile })(withRouter(CreateProfile));
