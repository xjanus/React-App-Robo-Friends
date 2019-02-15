import React from 'react';

const card = (props) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots' src='https://robohash.org/test?200x200'></img>
            <div>
                <h2>Name</h2>
                <p>name@email.com</p>
            </div>
        </div>
    );
}

export default card;