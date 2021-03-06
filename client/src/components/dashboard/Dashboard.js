import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import DashboardActions from './DashboardActions';
import Spinner from '../layout/Spinner';

const Dashboard = ({ getCurrentProfile, deleteAccount, auth: { user }, profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);
    return loading && profile === null ? <Spinner /> : <Fragment>
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead"><i className="fas fa-user"></i> Welcome {user && user.name}</p>
        {profile &&
            <div>
                <p style={{ paddingBottom: '15px', fontSize: '1.2rem' }}>{`Name: ${profile.name}`}</p>
                <p style={{ paddingBottom: '15px', fontSize: '1.2rem' }}>{`Surname: ${profile.sureName}`}</p>
                <p style={{ paddingBottom: '15px', fontSize: '1.2rem' }}>{`Personal ID number: ${profile.personalIdNumber}`}</p>
                <p style={{ paddingBottom: '15px', fontSize: '1.2rem' }}>{`Location: ${profile.location}`}</p>
            </div>
        }

        {profile !== null ?
            <Fragment>
                <DashboardActions />
                <div className="my-2">
                    <button className="btn btn-danger" onClick={() => deleteAccount()}>
                        <i className="fas fa-user"></i> Delete My Account
                    </button>
                </div>
            </Fragment> :
            <Fragment>
                <p>You have not yet setup a profile, please add some info</p>
                <Link to='/create-profile' className='btn btn-primary my-1'>
                    Create Profile
                </Link>
            </Fragment>}
    </Fragment>;
};


Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
