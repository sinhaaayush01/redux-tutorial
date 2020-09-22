import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

function UserContainer({userData, fetchUsers}) {
    useEffect(() => {
        fetchUsers();
    }, [])
    return (
        <div>
            {userData.loading ? 
                <p> Loading ...</p> :
                userData.error ? 
                <p>{userData.error}</p>
                :
                <div>
                    <h2>Users</h2>
                    {userData && userData.users && userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
                </div>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const dispatchStateToProps = dispatch => {
    return {
        fetchUsers: () => {dispatch(fetchUsers())}
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(UserContainer);