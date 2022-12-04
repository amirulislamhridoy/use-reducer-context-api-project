import React, { useContext } from 'react';
import { USER_CONTEXT } from '../../App';
import User from '../Shared/User/User';

const Selected = () => {
    const {data, dispatch} = useContext(USER_CONTEXT)

    return (
        <div className='home'>
            {data?.card?.map((d, i) => <User user={d} key={i}></User>)}
        </div>
    );
};

export default Selected;