import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({
    onFilteredEmployeesHandler,
    filteredProfiles,
    onFrozenEmployeesHiden,
    auth: { user }
}) => {
    return (
        <div className="profile-filter bg-light">
            <input type="text" placeholder="Filter by skills" onChange={onFilteredEmployeesHandler} value={filteredProfiles} />
            {user && user.role === 'hr' &&
                <div className="frozen-employees">
                    <label><input type="checkbox" onChange={onFrozenEmployeesHiden} />Show frozen employees</label>
                </div>
            }
        </div>
    )
}

SearchInput.propTypes = {
    auth: PropTypes.object.isRequired,
    onFilteredEmployeesHandler: PropTypes.func.isRequired,
    filteredProfiles: PropTypes.string.isRequired,
    onFrozenEmployeesHiden: PropTypes.func.isRequired,
}

export default SearchInput
