import React, { useContext } from 'react';
import { USER_CONTEXT } from '../../App';
import User from '../Shared/User/User';
import './Home.css';

const Home = () => {
    const {data} = useContext(USER_CONTEXT)
    return (
        <div className='home'>
            {data?.data?.map((d, i) => <User user={d} key={i}></User>)}
        </div>
    );
};

export default Home;