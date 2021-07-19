import React from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({ profile: { user: { name } } }) =>
    <div className="profile-about bg-light p-2">
        User description coming soon
    </div>

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileAbout;
