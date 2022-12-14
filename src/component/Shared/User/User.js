import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { USER_CONTEXT } from '../../../App';
import { CARD, REMOVE } from '../../../Reducer/ReducerTypes';
import './User.css'

const User = ({ user, i }) => {
    const { dispatch, data } = useContext(USER_CONTEXT)
    const location = useLocation()

    const removeFn = () => {
        user.newId = i
        dispatch({ type: REMOVE, payload: user })
    }
    return (
        <div className='user'>
            <h3>{user.name}</h3>
            <h5>Company: {user?.company?.name}</h5>
            <h5>Website: {user.website}</h5>
            {location.pathname === '/' && <button onClick={() => dispatch({ type: CARD, payload: user })}>Select</button>}
            {location.pathname === '/selected' && <button onClick={removeFn}>Remove</button>}
        </div>
    );
};

export default User;