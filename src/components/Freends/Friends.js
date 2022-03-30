import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])

    return (
        <div>
            <h2>Hello Friends. How are you</h2>
            <p><small>Parle kicu tk dar dis.</small></p>
            {
                friends.map(friend => <Friend friend={friend} key={friend.id}></Friend>)
            }
        </div>
    );
};

export default Friends;