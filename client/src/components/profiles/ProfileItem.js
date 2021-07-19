import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
    profile: {
        user: { _id, avatar },
        location,
        name,
        sureName
    },
}) => {
    console.log(`name`, name)
    return (
        <div className="profile bg-light">
            <img src={avatar} alt='' className="round-img" />
            <div>
                <h2>{`${name} ${sureName}`}</h2>
                <p className="my-1">{location && <span>{location}</span>}</p>
                <div className="expired-mobile-wrapper">
                    <Link to={`/profile/${_id}`} className='btn btn-primary'>
                        View Profile
                    </Link>
                </div>
            </div>
        </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

export default ProfileItem;
